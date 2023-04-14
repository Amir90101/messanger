let h3 = document.querySelector('h3')
const messagesContainer = document.querySelector('#messages')


async function showUserName() {
    let secondUserId = localStorage.getItem('secondUserId')


    const userInfo = await makeQuery('users/'+secondUserId)

    h3.innerHTML = userInfo.userName
}
showUserName()