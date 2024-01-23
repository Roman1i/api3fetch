// https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=${token}

const page = 1
const perPage = 20
const token = 'gTn1Tir9n9WM94s8jIli_qRc4mRskqrWP3P7Usa2tO4'
const element = document.getElementById('photo')


fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=${token}`)
.then(response => response.json())
.then(json => {
    console.log(json)
    const current = json[Math.floor(Math.random() * (perPage - page) + page)]
    element.innerHTML = `
    <img class="image" src="${current.urls.full}" alt="">
    <p class="name">Author username: ${current.user.username}</p>
    <p class="info">Location: ${current.user.location}</p>
    <p class="info">Info: ${current.user.bio}</p>
    <div class="likes">
    <h2 id="like">Likes: ${current.likes}</h2>

    </div>
    `
    const like = document.getElementById('like')
    like.addEventListener('click', () => {
        current.likes += 1
        like.textContent = `Likes: ${current.likes}`
    })
})

