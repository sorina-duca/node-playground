
const weatherData = (address) => fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then(data => {
        if (data.error) {
            console.log(data.error)
        }
        console.log(data)
    })
})

const weatherForm = document.getElementById('weather-form')
const search = document.getElementById('search')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const address = search.value
    const data = weatherData(address)
    console.log(data)
})