let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let h1 = document.querySelector('h1')

h1.innerHTML += currentUser.userName + '  SSS'



async function drawUsers(){
    let users = await makeQuery('users')

    document.querySelector('#userList').innerHTML = ''


    for (let user of users) {
        document.querySelector('#userList').innerHTML += `
        <p onclick="openChat('${user._id}')">${user.userName}</p>
        `
    }
}

drawUsers()

async function openChat(userId){
    let chat = await makeQuery('chats' , 'post', {
        firstUserId: currentUser._id, 
        secondUserId: userId,
    })


    localStorage.setItem('secondUserId', userId)
    localStorage.setItem('currentChatId', chat._id)
    location.href = 'chat.html'
}