// Add the coffee to local storage with key "coffee"

const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

let container = document.getElementById("menu")

fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (res) {
        mydata(res.menu.data)
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })

let cart = JSON.parse(localStorage.getItem("coffee")) || []

let length = cart.length
document.getElementById("coffee_count").innerText = length

function mydata(data) {
    console.log(data)
    data.forEach(function (ele) {

        let box = document.createElement("div")
        box.setAttribute("class", "box")

        let image = document.createElement("img")
        image.src = ele.image
        image.setAttribute("class", "img")

        let type = document.createElement("p")
        type.innerText = ele.title

        let price = document.createElement("img")
        price.innerText = ele.price

        let btn = document.createElement("button")
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id", "add_to_bucket")
        btn.addEventListener("click", function () {
            mybtn(ele)
        })

        box.append(image, type, price, btn)
        container.append(box)

    })
}

function mybtn(ele) {
    cart.push(ele)
    localStorage.setItem("coffee",JSON.stringify(cart))
    window.location.reload()
}