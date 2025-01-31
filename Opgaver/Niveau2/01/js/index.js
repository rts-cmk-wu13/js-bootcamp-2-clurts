let buttons = document.querySelectorAll("#buttons button")

function handleClick(clickedElement) {
     buttons.forEach(function(button) {
            button.style.backgroundColor = "#eee"
        })   
        clickedElement.style.backgroundColor = "#7f7"
    }
    
    buttons.forEach(function(button) {
        button.addEventListener("click", function(){
            handleClick(button)
        })
})