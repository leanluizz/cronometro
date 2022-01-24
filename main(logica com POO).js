"use strict"

class Cronometro {
    constructor(){
        this.hour1 = document.querySelector(".input-hour1");
        this.hour2 = document.querySelector(".input-hour2");

        this.min1 = document.querySelector(".input-min1");
        this.min2 = document.querySelector(".input-min2");

        this.sec1 = document.querySelector(".input-sec1");
        this.sec2 = document.querySelector(".input-sec2");

        this.arrayCrono = [this.hour1, this.hour2, this.min1, this.min2, this.sec1, this.sec2]
        this.Start = () =>{
            //Contagem dos segundos
            setInterval(() => {
                this.sec2.value++
                if (this.sec2.value > 9) { //Assim que o segundo2 número chegar em 9  ele volta para o 0
                    this.sec2.value = 0
                }
            }, 1000);

           setInterval(() => {
                if(this.sec2.value >= 9){
                    this.sec1.value++
             }else if (this.sec1.value >= 6) { //Assim que o segundo1 número chegar em 6  ele volta para o 0
                 this.sec1.value = 0
             }
            }, 1100);
            //Contagem dos minutos
            setInterval(() => {
                if (this.sec1.value >= 6) { //Se o segundo 1 chegar no 6 o minuto 2 começa a conta
                    this.min2.value++
                }else if(this.min2.value >= 9){
                    this.min2.value = 0
                    this.min1.value++
                }
            }, 10000);
            //Contagem doas horas
            setInterval(() => {
                 if (this.min1.value >= 6){
                    this.hour2.value++
                }else if(this.hour2.value >= 9){
                    this.hour2.value = 0
                    this.hour1.value++
                }
            }, 100000);
        }
        
          // Serve para parar a contagem do Crônometro
          
        this.Close = () =>{
                this.arrayCrono.forEach(function(nome, indice, array){
                    nome.value = 0
                })
                clearInterval(this.Start())
                }
         }
    }



var greenbutton = document.querySelector(".green-button")

greenbutton.addEventListener("click", function Open(){
    var Time = new Cronometro()
    Time.Start()
})

var redbutton = document.querySelector(".red-button");
redbutton.addEventListener("click", function Close(){
    var Time = new Cronometro()
    Time.Close()
})
