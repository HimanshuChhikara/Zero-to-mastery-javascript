let data = {
    name : 'Himanshu',
    value : '["Himanshu", "Chhikara","Barcelona"]',
    obj: '{"src" : "http://localhost:2220"}'
}

// console.log(JSON.parse(data.name));

let parseObj = (data) => {
    for(let [key, value] of Object.entries(data)) {
        if(value[0] === '{' || value[0] === '[') {
          
            data[key]= JSON.parse(value) 
        }
    }
    console.log(data);
}

parseObj(data);