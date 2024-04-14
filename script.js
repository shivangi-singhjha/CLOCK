let btn = document.querySelector("#gene");
let h = document.querySelector(".hours");
let m = document.querySelector(".min");
let s = document.querySelector(".sec");
let i;
let f = 1
function showTime() {
    const d = new Date();
    h.innerText = d.getHours();
    m.innerText = d.getMinutes();
    s.innerText = d.getSeconds();
    f = 0;
};
btn.addEventListener("click", () => {
    if (f == 1) {
        i = setInterval(showTime, 1000);
        btn.innerText = "STOP"
        btn.style.backgroundColor = "#7F3FBF";
        btn.style.boxShadow = "0 0 30px #7F3FBF";
    }
    else {
        btn.innerText = "START"
        btn.style.backgroundColor = "black";
        btn.style.boxShadow = "0 0 30px black";
        clearInterval(i);
        f = 1;
    }
});