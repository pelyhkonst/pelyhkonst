
window.addEventListener('DOMContentLoaded', function () {
    // let name = prompt("What is your name?");
    //
    // let reg = /n/ig;
    //
    // console.log(name.match(reg));

    let pass = prompt('Your pass?')

    console.log(pass.replace(/-/g, ":"))


    pass.getBoundingClientRect()
})