var inp = document.getElementById('ball');
var x = 0, y = 0 ;
document.addEventListener('keyup', (event) => {
    let interval = setInterval(()=>{
        const c = event.key.toLowerCase();
        switch(c) {
            case 'w':
                if(y > 0){
                    y--;
                } else{
                    clearInterval(interval);
                    return;
                }
                inp.style.transform = "translate("+x+"px,"+y+"px)";
            break;
            case 'a':
                if(x > 0){
                    x--;
                } else {
                    clearInterval(interval);
                    return;
                }
                inp.style.transform = "translate("+x+"px,"+y+"px)";
            break;
            case 's':
                if(y < window.innerHeight-100){
                    y++;
                } else {
                    clearInterval(interval);
                    return;
                }
                inp.style.transform = "translate("+x+"px,"+y+"px)";
            break;
            case 'd':
                if(x < window.innerWidth-100){
                    x++;
                } else {
                    clearInterval(interval);
                    return;
                }
                inp.style.transform = "translate("+x+"px,"+y+"px)";
            break;
            default:
                console.log('swaroop');
            break;
        }
    },5);
    
});
