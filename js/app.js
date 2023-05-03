"use strict"

const main = document.querySelectorAll("#main")
const btns = document.querySelectorAll("#btn")

function clearDataSet() {
    main.forEach(item => item.classList.remove("active"))
    btns.forEach(item => item.classList.remove("active"))
}

function renderData(name) {
    main.forEach(item => {
        if(item.dataset.fot === name) {
            item.classList.add("active")
        }
    })

    btns.forEach(item => {
        if(item.dataset.fot === name) {
            item.classList.add("active")
        }
    })
}

btns.forEach(item => {
    item.addEventListener("click", () => {
        clearDataSet()
        renderData(item.dataset.fot)
    })
})