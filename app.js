let [centisecond,second,minute] = [0, 0, 0];
let display = document.querySelector('.stopwatch');
let int = null;

let button = document.querySelector('.container.text-center.button');
let startStop = document.querySelector('.start-stop');
let reset = document.querySelector('.reset');
console.log(reset);


button.addEventListener('click', (e) => {
    
    if (e.target.classList.contains("start-stop")|| e.target == startStop.firstElementChild || e.target == startStop.firstElementChild.firstElementChild)  {
        startStop.firstElementChild.classList.add('d-none');
        startStop.lastElementChild.classList.remove('d-none');

        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
        

    }
    if(e.target.classList.contains("start-stop")|| e.target == startStop.lastElementChild || e.target == startStop.lastElementChild.firstElementChild){
        startStop.firstElementChild.classList.remove('d-none');
        startStop.lastElementChild.classList.add('d-none');

        clearInterval(int);
    }

    if(e.target.classList.contains("reset")|| e.target == reset.firstElementChild || e.target == reset.firstElementChild.firstElementChild){
        clearInterval(int);
        [centisecond,second,minute] = [0, 0, 0];
        display.innerHTML = ` 00 : 00 : 00`;
        startStop.firstElementChild.classList.remove('d-none');
        startStop.lastElementChild.classList.add('d-none');
    }
    
});
function displayTimer(){
    centisecond+=1;

    if(centisecond == 100){
        centisecond = 0;
        second++;

        if(second == 60){
            second = 0;
            minute++;   
        }
    }
    
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let cs = centisecond < 10 ? "0" + centisecond : centisecond;

    display.innerHTML = ` ${m} : ${s} : ${cs}`;
}
