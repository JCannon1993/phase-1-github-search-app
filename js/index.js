const form = document.getElementById('github-form')

form.addEventListener('submit', function(e){
 e.preventDefault()
 console.log(e.target[0].value)
    
    fetch(`https://api.github.com/search/users?q=octocat`)
    .then((res)=> res.json())
    .then((data)=> {
        data.items.forEach(item => {
            if (item.login === `${e.target[0].value}`){
                const ul = document.getElementById('user-list')
                const li = document.createElement('li')
                const avi = document.createElement('img')
                avi.setAttribute('src', `${item.avatar_url}`)
                li.innerText = `Username: ${item.login}, URL: ${item.url}`
                ul.appendChild(li)
                ul.prepend(avi)
            }
        })

    })
})



