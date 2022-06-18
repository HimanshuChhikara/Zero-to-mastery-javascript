'use strict';
const chai = require('chai');
let expect = chai.expect;
let supertest = require('supertest');
chai.use(require('chai-json-schema'));
const apiutil = require('../../utils/apiconfig.js');
const testUtil = require('../utils.js');
const hostname = apiutil.getTestHostName();
const {productListSchema} = require('../schemas/productschema');
const hostnamev3 = apiutil.getTestHostName('v3');
let plpV3Api = supertest('http://' + hostnamev3 + '/plp');
const xSellSchema = {
    'type': 'array',
    'items':{
        'type': 'object',
        'properties': {
            'xSaleItemId': {
                'type': 'string'
            },
            'xSaleItemPosition': {
                'type': 'string'
            },
            'xSaleData': {
                'type': 'object'
            },
            ...productListSchema.items.properties
        },
        'required':productListSchema.items.required
    }
}
const plpV3Schema = {
    'type': 'object',
    'properties': {
        'products': productListSchema,
        'totalRecords': {
            'type': 'integer'
        },
        "xSellData": xSellSchema,
        "plpBanners": {
            'type': 'string'
        },
        "breadcrumb": {
            'type': 'array'
        },
        "facetview": {
            'type': 'array'
        },
    },
    'required': [
        'totalRecords',
        'products'
    ]
};
let categoryId;
let topCategoryURL = supertest('http://' + hostname + '/categories/@top');
describe('Product List V2 API', function () {
    // This function will run onetime to get categoryid
    before(function(done) {
        topCategoryURL.get('')
            .set('storeId',testUtil.storeIdCred())
            .expect(200)
            .end(function (req, res) {
                try{
                     categoryId= res.body.catArray[0].subCatArray[0].uniqueId;
                    
                    if(res.body.catArray[0].subCatArray[0].subCatArray && res.body.catArray[0].subCatArray[0].subCatArray.length > 0){
                        categoryId = res.body.catArray[0].subCatArray[0].subCatArray[0].uniqueId;
                    }
                    done();
                }catch(e){
                    done(e);
                }
            });
    });
    it('should return page not found', function (done) {
        plpV3Api.get('/')
            .set('storeId', testUtil.storeIdCred())
            .expect(404,done);
    });
    it('should return totalrecords 0 if invalid product id set', function (done) {
        plpV3Api.get('/1234')
            .set('storeId', testUtil.storeIdCred())
            .expect(200)
            .end(function (err, res) {
                try{
                    expect(res.body).to.have.property('totalRecords');
                    expect(res.body.totalRecords).to.equal(0);
                    expect(res.body).to.have.property('products');
                    expect(res.body.products).to.lengthOf(0);
                    done();
                }catch(e){
                    done(e);
                }
            });
    });
    it('should adhere to the product list schema definition', function (done) {
        plpV3Api.get('/'+categoryId)
            .set('storeId', testUtil.storeIdCred())
            .expect(200)
            .end(function (err, res) {
                try{
                    expect(res.body).to.have.property('totalRecords');
                    expect(res.body).to.have.property('products');
                    expect(res.body).to.be.jsonSchema(plpV3Schema);
                    done();
                }catch(e){
                    done(e);
                }
            });
    });
});