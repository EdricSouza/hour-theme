var dataAtual = new Date()
var horaAtual = dataAtual.getHours()
var diaAtual = dataAtual.getDay()
const dayNames = ["um ótimo domingo", " uma ótima segunda", "uma ótima terça", "uma ótima quarta", "uma ótima quinta", "uma ótima sexta", "um ótimo sábado"];

console.log(`Hours: ${horaAtual}`)
console.log(`Day: ${dayNames[diaAtual]}`)

var body = document.body
var img = document.querySelector('#img')
var moment

if(horaAtual>4&&horaAtual<13){dia()}
else if (horaAtual>12&&horaAtual<18){tarde()}
else{noite()}

function dia(){
    body.style.backgroundColor = `#FF9500`
    img.innerHTML = `<img src="img/dia.jpg" alt="dia">`
    moment = `dia`
    console.log(`Moment: ${moment}`);
}

function tarde(){
    body.style.backgroundColor = `rgb(172, 42, 9)`
    img.innerHTML = `<img src="img/tarde.jpg" alt="tarde">`
    moment = `tarde`
    console.log(`Moment: ${moment}`);
}

function noite(){
    body.style.backgroundColor = `#6495ED`
    img.innerHTML = `<img src="img/noite.jpg" alt="noite">`
    moment = `noite`
    console.log(`Moment: ${moment}`);
}

document.querySelector('#main-text').innerHTML = `Hoje é ${dayNames[diaAtual]}, e são ${horaAtual} horas da ${moment}!.`
        