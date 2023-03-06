const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36

const increase = () => {
    fontSize += 5
    p.style.fontSize = fontSize + 'px'
}

const decrease = () => {
    if (fontSize <= 21) {
        return
    }
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)


//

// fetch("https://api.spacexdata.com/v4/404")
//     .then((response) => {
//         return response.json()
//     })
//     .then((json) => {
//         console.log(json)
//     })
//     .catch((error) => {
//         if (error.status === 404) {
//             return console.error("Page not found")
//         }

//         return console.error(error)
//     })

//

fetch("https://api.spacexdata.com/v4/404")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Response not ok", {
                cause: response,
            })
        }

        return response.json()
    })
    .then((json) => {
        console.log(json)
    })
    .catch((error) => {
        if (error.cause.status === 404) {
            return console.error("Page not found")
        }
        console.error(error)
    })