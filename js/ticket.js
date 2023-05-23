//Aca lo que vamos a hacer es recuperar el valor del atributo name, 
//asi hacemos la comparacion y hacemos el descuento segun el caso

var cuponSeleccionado = []; 



var cupones = document.querySelectorAll('.box');
//querySelectorAll devuelve un arreglo

//a cada valor del arreglo le damos una funcion que setea el arreglo segun cada valor del arreglo que devuelve querySelectorAll

cupones.forEach(currentCuppon => {
    currentCuppon.addEventListener('click', ()=>{
        
        if(cuponSeleccionado && cuponSeleccionado.length < 1){
            cuponSeleccionado.push(currentCuppon.id)
            document.querySelector("#categoria").value = currentCuppon.id;
        }else{
            cuponSeleccionado = []; 
            cuponSeleccionado.push(currentCuppon.id);
            document.querySelector("#categoria").value = currentCuppon.id;
        }
        console.log(cuponSeleccionado);
    });
});



//Ahora vamos a calcular el descuento, sabiendo que es de 200pesos 


var btnCalcular = document.querySelector("#btn-calcular");

btnCalcular.addEventListener('click', (e)=>{
    e.preventDefault();
    let currentCuppon = document.querySelector("#categoria").value;
    let displayTotal = document.querySelector("#total").innerHTML;
    let cantidadCursos = document.querySelector("#inp-cantidad").value;
   //console.log(valor);


    if(cuponSeleccionado && cuponSeleccionado.length < 1){
        cuponSeleccionado.push(currentCuppon)
    }else{
        cuponSeleccionado = []; 
        cuponSeleccionado.push(currentCuppon)
    }

    if(cuponSeleccionado[0] === 'student'){
        let descuento = (cantidadCursos * 200) * 0.80;
        let total = (cantidadCursos * 200) - descuento; 
        console.log(total);
        document.querySelector("#total").innerHTML = `<p>total a pagar: $ ${total}</p> `;

    
    }else if(cuponSeleccionado[0] === 'trainee'){
        let descuento = (cantidadCursos * 200) * 0.50;
        let total = (cantidadCursos * 200) - descuento; 
        console.log(total);
        document.querySelector("#total").innerHTML = `<p>total a pagar: $ ${total}</p> `;

    }else if(cuponSeleccionado[0] === 'junior'){
        let descuento = (cantidadCursos * 200) * 0.15;
        let total = (cantidadCursos * 200) - descuento; 
        console.log(total);
        document.querySelector("#total").innerHTML = `<p>total a pagar: $ ${total}</p> `;

    }


});

