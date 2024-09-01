const darkModeBtn = document.querySelector(".darkmodeBtn")
const mode = document.querySelectorAll('.mode')
//var isDarkMode = false

/*
var isDarkmode = false
darkModeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode
    mode.forEach(element => {
        if(!isDarkMode) {
            element.classList.add("dark")
        }
        else {
            element.classList.remove("dark")
        }
    })
})
    */
var count = 0;

darkModeBtn.addEventListener('click', () => {
    switch (count) {
        case  0:
            mode.forEach(element => {
                element.classList.add('dark')
            })
            break;
        case 1:
            mode.forEach(element => {
                element.classList.remove('dark')
            element.classList.add('pink')
            })
            break;
        case 2:
            mode.forEach(element => {
                element.classList.remove('pink')
            })
            break;
    
        default:
            break;
    }
    count++
    if (count > 2) {
        count = 0;
    }
})

