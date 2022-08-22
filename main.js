let time = document.querySelector(".copy span");
time.textContent = new Date().getFullYear();
let links = document.querySelectorAll("footer .nav a");
let active = document.querySelector("a.active");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        links.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active");
        document.body.style.backgroundColor = e.target.dataset.color
    })
})
window.onload = function () {
    window.scrollTo(0, 0);
}

// window.onscroll = function () {

//     if (window.innerWidth <= 992) {
//         document.body.style.transition = '1s';
//         if (window.pageYOffset < 370) {
//             document.body.style.backgroundColor = 'white';
//         }
//         if (window.pageYOffset >= 370) {
//             document.body.style.backgroundColor = '#00c1b5';
//         }
//         if (window.pageYOffset >= 995) {
//             document.body.style.backgroundColor = '#ff651a';
//         }
//         if (window.pageYOffset >= 1665) {
//             document.body.style.backgroundColor = '#ffbe00';
//         }
//         if (window.pageYOffset >= 2350) {
//             document.body.style.backgroundColor = '#1d3fbb';
//         }
//         if (window.pageYOffset >= 3056) {
//             document.body.style.backgroundColor = '#e30512';
//         }
//     }
// }

const one = document.querySelector('#issue_6 + div img');
const two = document.querySelector('#issue_5 + div img');
const three = document.querySelector('#issue_4 + div img');
const four = document.querySelector('#issue_3 + div img');
const five = document.querySelector('#issue_2 + div img');
const six = document.querySelector('#issue_1 + div img');

window.onscroll = function () {

    if (window.innerWidth <= 992) {
        if (window.pageYOffset < (one.offsetTop + one.offsetHeight / 2)) {
            document.body.style.backgroundColor = 'white';
        }
        if (window.pageYOffset >= (one.offsetTop + one.offsetHeight / 2)) {
            document.body.style.backgroundColor = '#00c1b5';
        }
        if (window.pageYOffset >= (two.offsetTop + two.offsetHeight / 2)) {
            document.body.style.backgroundColor = '#ff651a';
        }
        if (window.pageYOffset >= (three.offsetTop + three.offsetHeight / 2)) {
            document.body.style.backgroundColor = '#ffbe00';
        }
        if (window.pageYOffset >= (four.offsetTop + four.offsetHeight / 2)) {
            document.body.style.backgroundColor = '#1d3fbb';
        }
        if (window.pageYOffset >= (five.offsetTop + five.offsetHeight / 2)) {
            document.body.style.backgroundColor = '#e30512';
        }
        document.body.style.transition = '1s';
    }
}
