
const button = document.querySelector("#my-button")

let isSelected = false;

function toggleButton (selected) {
    if (selected) {
        button.classList.add("click")
    } else {
        button.classList.remove("click")
    }
}

button.addEventListener("click", function() {

    isSelected = !isSelected
    toggleButton(isSelected)

    // if ( isSelected) {
    //     isSelected = false
    // } else {
    //     isSelected = true
    // }

})

// button.addEventListener("click", function() {
//     button.classList.toggle("click")
// })