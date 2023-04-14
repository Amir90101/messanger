const BASE_URL = 'http://10.60.10.16:8080/api/'
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


async function loginIn(){ 
    const login = document.querySelector(`#login`).value 
    const password = document.querySelector(`#password`).value 
    let payload = {login, password,} 
    let data = await makeQuery(`users/login`, 'post', payload) 
    
    if(data.ok){
        localStorage.setItem('currentUser', JSON.stringify(data.user))
    }else{
        alert('User not found!')
    }   
}