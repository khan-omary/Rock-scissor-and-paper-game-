

let weapon = document.querySelector('#weapon');

let images = document.querySelectorAll('.image_items');
let cpuImages = document.querySelectorAll('.img_cpu_choosed');
// images[0].addEventListener('click',()=>{
//     alert('click');
// })


for(let i = 0; i <= images.length -1 ; i++){
    images[i].addEventListener('click', ()=> {
        hiddenSelect(i);
        randcpu = Math.floor((Math.random()*10)/4);
        cpuImages[randcpu].classList.remove('hidden');
        gameLogic(i, randcpu);
    })
}

function hiddenSelect(i){
    for(let j=0; j<=images.length-1 ; j++){
            if (j !== i){
                images[j].classList.add('hidden');
            }
        }
}

let conter=0;

const refreshFunction = ()=>{
    for(let i = 0; i <= images.length -1 ; i++){
        images[i].classList.remove('hidden');
        cpuImages[i].classList.add('hidden');

        weapon.textContent = "Choose your weapon";
    }
    conter = conter+ 1;
    if (conter === 10){
        let userpoint = Number(document.querySelector('#user-point').textContent);
        let cpupoint = Number(document.querySelector('#cpu-point').textContent);

        if (userpoint > cpupoint){
            alert("You Win !");
        }else if (cpupoint > userpoint) {
            alert("CPU Win !")
        }else{
            alert("Equil !");
        }
        location.reload();
    }
}

document.querySelector('#ref-btn').addEventListener('click', refreshFunction);
document.addEventListener('keydown',(e)=>{
    if (e.key == 'r') {
        refreshFunction();
    }
});

function gameLogic(user, cpu){
    const userpoint = document.querySelector('#user-point');
    const cpupoint = document.querySelector('#cpu-point');

    if( user !== cpu){
        if (user == 0) {
            weapon.innerHTML = 'Paper choosed ';
            if (cpu == 1) {
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
            }else{
                cpupoint.textContent = Number(cpupoint.innerHTML) + 1
            }
        }
        if (user == 1) {
            weapon.innerHTML = 'Rock choosed ';
            if (cpu == 0) {
                cpupoint.textContent = Number(cpupoint.innerHTML) + 1
            }else{
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
            }
        }
        if (user == 2) {
            weapon.innerHTML = 'Scissore choosed ';
            if (cpu == 0) {
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
            }else{
                cpupoint.textContent = Number(cpupoint.innerHTML) + 1
            }
        }
    }
}