

function skjulElementViaCssSelector(cssSelector) {
    let element = document.querySelector(cssSelector)
    skjulElement(element)
}

function skjulElementerViaCssSelector(cssSelector) {
    let elements = document.querySelectorAll(cssSelector)
    elements.forEach(function(element) {
        skjulElement(element)
    })
}

function skjulElement (element) {
    if(element != null) element.style.display = "none"
}

skjulElementerViaCssSelector(".bodycopy")