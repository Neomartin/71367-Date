const dateHTML = document.querySelector("#date")
const horaHTML = document.getElementById("hora")
const minutosHTML = document.querySelector("#minutos")
const segundosHTML = document.getElementById("segundos") 

const nombresDiaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
const nombresMeses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]



function setClock() {
    const fecha = new Date();
    
    // console.log(`setClock funcionando...`)

    let hora = formatClockValue( fecha.getHours() )   

    let minutos = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes() 


    let  segundos = formatClockValue( fecha.getSeconds() );

    horaHTML.innerText = hora;
    minutosHTML.innerText = minutos;
    segundosHTML.innerText = segundos;

    

    const dia = fecha.getDate() //dia del mes
    const year = fecha.getFullYear()

    const mes = fecha.getMonth()
    const nombreMes = nombresMeses[mes]


    const diaSemana = fecha.getDay() //dia de la semana empezando por domingo con valor 0
    const nombreDiaSemana = nombresDiaSemana[diaSemana];

    dateHTML.innerText = `BIENVENIDO,\n HOY ES ${nombreDiaSemana} ${dia} DE ${nombreMes} DE ${year}`;
}

function formatClockValue(value) {

    // return value < 10 ? "0"+value  : value;
    if(value < 10) {
        return "0" + value;
    } 

    return value

    // #Otro método
    // return value.toString().padStart(2, "0")
}

setClock();


setInterval(() => {
    setClock()
}, 1000)









// # BIENVENIDO, HOY ES VIERNES 22 DE MARZO DE 2024










// switch(diaSemana) {
//     case 0:
//         nombreDiaSemana = "Domingo";
//         break;
//     case 1:
//         nombreDiaSemana = "Lunes";
//         break;
//     case 2:
//         nombreDiaSemana = "Martes";
//         break;
//     case 3:
//         nombreDiaSemana = "Miércoles";
//         break;
//     case 4:
//         nombreDiaSemana = "Jueves";
//         break;
//     case 5:
//         nombreDiaSemana = "Viernes";
//         break;
//     case 6:
//         nombreDiaSemana = "Sábado";
//         break;
// }



console.log(hora, minutos, segundos)

console.log(`${dia}/${mes}/${year}`)
// getDate() número de día de la semana
// getDay() dia de la semana 