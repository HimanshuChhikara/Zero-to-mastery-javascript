const axios = require('axios');
const fs = require('fs');
const Path =  require('path');
const express = require('express');
const app = express();


const port = 4000;

app.get('/recipe/:fooditem',async (req,res) => {
    try{
        // const fooditem = req.params.fooditem;
        const recipe = await axios.get('https://apod.nasa.gov/apod/image/2107/sh2_101_04_1024.jpg');

        return res.status(200).send({
            message: "Sucess",
            data: recipe.data.results
        });
    }
    catch (err) {
        console.error(err);
    }

})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})

async function downloadImage(){
    
    const url = ['https://apod.nasa.gov/apod/image/2107/sh2_101_04_1024.jpg','https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885','https://pixabay.com/photos/sky-clouds-dark-cloudscape-690293'];
    const path = Path.resolve(__dirname,'images','code.jpg');
    const writer = fs.createWriteStream(path);


    for(let i=0; i<url.length; i++){
    const response = await axios({
        url: url[i],
        method: 'GET',
        responseType: 'stream',
    })
}

    response.data.pipe(writer);

    return new Promise((resolve,reject) => {
        writer.on('finished', resolve);
        writer.on('error',reject);
    })
}


downloadImage();



