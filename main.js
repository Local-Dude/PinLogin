let input = document.querySelector('input')
let clear = document.querySelector('#calc_back')
let check = document.querySelector('#calc_done')
let done = document.querySelector('.true')

clear.addEventListener('click', ()=>{
    input.value =  input.value.split('').slice(0, -1).join('')
})

document.addEventListener('click', (e)=> {
    const elem = e.target;
    if(elem.classList.contains('calc_int')) {
        input.value += elem.textContent
    } 
    
})

check.addEventListener('click', ()=> {
    if(input.value !== done.textContent) {
        input.style.backgroundColor = '#ff8b79'
        
    } else {
        input.style.backgroundColor = '#b8ff79'
        document.querySelector('#the-calculator').style.display = 'none'
        done.style.fontSize = '50px'
        done.textContent = 'Thanks You'
    }
})