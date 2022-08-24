var inp = document.getElementById('square');
console.log(Math.random());
inp.addEventListener('mouseover', () => {
    let x = window.innerWidth-100;
    let y = window.innerHeight-100;
    let x1 = Math.floor(Math.random()*x);
    let y1 = Math.floor(Math.random()*y);
    inp.style.transform = "translate("+x1+"px,"+y1+"px)";
});