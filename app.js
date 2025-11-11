const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const root = path.join(__dirname, 'public')


app.get('/', (request, response) => {
    //response.send('work?')
    response.sendFile('index.html', { root })
})
app.get('/api/v1/joke', (request, response) => {
    const r = Math.floor(Math.random() * jokeList.length )
    response.json(jokeList[r])
})

const jokeList = [

    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 4,
        joke: "I told my wife she should embrace her mistakes.",
        punchline: "She gave me a hug."
    },
     {   id: 5,
        joke: "I don't trust stairs.",
        punchline: "They're always up to something."
     }
]
app.use(express.json())
app.use(express.static('public'))





app.listen(port, () => console.log(`http://localhost:${port}/`))