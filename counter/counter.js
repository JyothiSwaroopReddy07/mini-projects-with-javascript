var but = document.getElementById('button');
but.addEventListener('click',() => {
    let inp= document.getElementById('input').value;
    let c=0;
    let interval = setInterval(()=>{
        if(c ==  inp) {
            clearInterval(interval);
            document.querySelector('span').innerText = '0';
            document.getElementById('input').value = 0;
            alert("The counting is done.Try Again!!!!");
            return;
        }
        c++;
        let p = c;
        let pro = document.querySelectorAll('span');
        for(let i = pro.length -1 ;i >= 0; i--) {
            pro[i].innerText = (p%10).toString();
            p = Math.floor(p/10);
        }
    },10);
})