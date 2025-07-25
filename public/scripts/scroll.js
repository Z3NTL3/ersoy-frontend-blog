
var nav = 
        document.getElementById("navbar")

document.addEventListener("scroll", (_) => {
    let gapY = window.scrollY
    let navState = 10
    
    if(gapY >= navState) {
        let currentClasses = nav.getAttribute("class")

        return nav.setAttribute("class", `${currentClasses} bg-black/30 border border-black/10 dark:bg-black/60 rounded-lg backdrop-blur-lg`)
    }

    let remove = ["bg-black/30", "border", "border-black/10", "dark:bg-black/60", "rounded-lg", "backdrop-blur-lg"]
    for (let i = 0; i < remove.length; i++) {
        let del = remove[i];
        nav.classList.remove(del)
    }
})