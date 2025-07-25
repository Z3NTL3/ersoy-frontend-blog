console.log("hello")
var nav = 
        document.getElementById("navbar")

document.addEventListener("scroll", (_) => {
    let gapY = window.scrollY
    let navState = 60
    
    console.log("scrollDetected", gapY, navState)
    if(gapY >= navState) {
        let currentClasses = nav.getAttribute("class")
        return nav.setAttribute("class", `${currentClasses}`)
    }

    let remove = ["bg-black/10", "border", "border-black/10", "rounded-lg", "backdrop-blur-lg"]
    for (let i = 0; i < remove.length; i++) {
        let del = remove[i];
        nav.classList.remove(del)
    }
})