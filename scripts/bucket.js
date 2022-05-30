// On clicking remove button the item should be removed from DOM as well as localstorage.
let mycart = JSON.parse(localStorage.getItem("coffee")) || []
//console.log(mycart)

let total = mycart.reduce(function(sum,ele,index,arr){
    return sum + (ele.price)
},0);
console.log(total)

document.getElementById("total_amount").innerText = total

mycart.forEach(function(ele,index){

  let container = document.getElementById("bucket")

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
  btn.innerText = "Remove"
  btn.setAttribute("id", "remove_coffee")
  btn.addEventListener("click", function () {
      removebtn(ele)
  })

  box.append(image, type, price, btn)
  container.append(box)

})

function removebtn(ele,index){
     mycart.splice(index,1)
    // console.log(mycart)
    localStorage.setItem("coffee",JSON.stringify(mycart))
    window.location.reload()
}