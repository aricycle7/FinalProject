//NAVBAR STUFF
let nav_button = document.getElementsByClassName('nav_icon');
let nav = document.getElementsByClassName('nav')[0];

let nav_exit_index = document.getElementsByClassName('nav_icon_exit')

    nav_button[0].addEventListener("click", function() {
        this.classList.toggle("active");

        if (nav.style.display.match("block")) {
            console.log('pee')
            nav.style.display = "none";

        }
        else { 
            console.log('woosh')
            nav.style.display = "block";
        }
    })

    nav_exit_index[0].addEventListener("click", function() {
        this.classList.toggle("active");

        if (nav.style.display.match("block")) {
            console.log('pee')
            nav.style.display = "none";
        }
    })
