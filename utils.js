
const BASE_URL = 'http://10.60.10.16:8080/api/' 
const endpoint = 'users' 
async function makeQuery(endpoint, method='get', payload={}) { 
    const options = { 
        method, 
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        }, 
    }; 
    if(method.toLowerCase() === 'post' || method.toLowerCase() === 'post') {  
        options.body = JSON.stringify(payload); 
    } 
   let response =  await fetch(BASE_URL + endpoint, options); 
    return await response.json(); 
}