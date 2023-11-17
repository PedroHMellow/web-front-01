const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-warpe")
 
const openClick = function() {
    poupup.classList.add("d-block");
}

const eventModal = function(event) {
    const clickOFelemet = event.target.classList[0];
    const classlistNameAray = ["poupup-close", "poupup-warpe" , "poupup-link"]
    
    console.log(classlistNameAray.includes(clickOFelemet))
    
    const isClasslist = (classlistNameAray.includes(clickOFelemet))

    if (isClasslist) {
        poupup.classList.remove("d-block");
    }
}

button.addEventListener("click" , openClick)

poupup.addEventListener("click", eventModal)