
async function fetchJoke() {
    try {
        const response = await fetch('/api/v1/joke')
        if (!response.ok) {
            throw new Error('Failed to fetch joke')
        }
        const data = await response.json()

        
        //const jokeElement = document.getElementById('joke')
        const jokeElement = document.querySelector('#joke')

        
        //const punchlineElement = document.getElementById('punchline')
        const punchlineElement = document.querySelector('#punchline')

        
        jokeElement.textContent = data.joke
        punchlineElement.textContent = ''  
        punchlineElement.style.display = 'none'

        setTimeout(() => {
            punchlineElement.textContent = data.punchline
            punchlineElement.style.display = 'block'
            }, 3000)
        

    } catch (error) {
        console.error('Error fetching joke:', error)
    }
}


document.getElementById('nextJokeBtn').addEventListener('click', fetchJoke)


window.onload = fetchJoke

