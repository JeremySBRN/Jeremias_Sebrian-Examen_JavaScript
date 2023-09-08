let admin = "Juan Perez"
let password ="Prof123"
let estudiantes=[{
 nombre:"Ana",
 apellido:"Gomez",
 edad:40,
},{
 nombre:"Ana",
 apellido:"Gomez",
edad:40,
}]
let usuario= prompt("Ingrese nombre de usuario")
if(usuario==admin){
    let contraseña=prompt("Bienvenido Juan Perez, ingrese su contraseña")
    if(contraseña==password){
        let nuevoestudiante=estudiantes[1];

        let nombrealumno=prompt("Ingrese el nombre del/la alumno/a")
        nuevoestudiante.nombre=nombrealumno
        
        let apellidoalumno=prompt("Ingrese el apellido del/la alumno/a")
        nuevoestudiante.apellido=apellidoalumno

        let edadalumno=prompt("Ingrese la edad del/la alumno/a")
        nuevoestudiante.edad=edadalumno
    }
}

let recetario=[{
    plato:"ñoquis caseros",
    receta:"Mezclar pure de papas, harina,queso y especias.Una vez unida la mezcla armar pequeñas tiras de masa y cortarlas en dados de 3cm. darle forma con el tenedor.",
    },{
    plato:"humus",
    receta:"Procesar 100gr de garbanzos,un diente de ajo,aceite de oliva y jugo de limon hasta armar una pasta homogenea. Colocar en un pote ,decorar con aji molido .",
    },{
    plato:"papas fritas",
    receta:"cortar las papas en forma de baston.Calentar el aceite y una vez caliente, tirar las mismas. Una vez doradas,sacar del fuego y escurrir en papel de rollo de cocina.",
}];
let botonreceta=document.getElementById("boton")
botonreceta.addEventListener("click",()=>{
    switch(document.forms[0].elements[0].value){
        case recetario[0].plato:
            let pdereceta=document.createElement("p")
            pdereceta.textContent=recetario[0].receta
            document.getElementById("recuadroVerde").appendChild(pdereceta)
        break;
        case recetario[1].plato:
            let pdereceta1=document.createElement("p")
            pdereceta1.textContent=recetario[1].receta
            document.getElementById("recuadroVerde").appendChild(pdereceta1)
        break;
        case recetario[2].plato:
            let pdereceta2=document.createElement("p")
            pdereceta2.textContent=recetario[2].receta
            document.getElementById("recuadroVerde").appendChild(pdereceta2)
        break;
        default:
            let pdereceta3=document.createElement("p")
            pdereceta3.textContent="lo sentimos, nuestro recetario no dispone de la receta de este plato por el momento"
            document.getElementById("recuadroVerde").appendChild(pdereceta3)
        break; 
    }
})

let frase=["pablito","clavo","un","clavito"]
let espacio=" "
let textopablito=document.getElementById("parrafo")
textopablito.textContent= frase[0]+espacio+frase[1]+espacio+frase[2]+espacio+frase[3];
let botonpablito=document.getElementById("botonejercicio4")
botonpablito.addEventListener("click",()=>{
    switch(document.forms[1].elements[0].value){
        case frase[0]:
            textopablito.textContent= frase[1]+espacio+frase[2]+espacio+frase[3];
        break;
        case frase[1]:
            textopablito.textContent= frase[0]+espacio+frase[2]+espacio+frase[3];
        break;
        case frase[2]:
            textopablito.textContent= frase[0]+espacio+frase[1]+espacio+frase[3];
        break;
        case frase[3]:
            textopablito.textContent= frase[0]+espacio+frase[1]+espacio+frase[2];
        break;
    }
})

let payaso=document.createElement("img")
payaso.setAttribute("src","./imagenes/payaso.webp")
document.getElementsByClassName("sorpresa")[0].addEventListener("mouseover",()=>{
    document.getElementsByClassName("tema")[0].style.backgroundColor="pink"   
    document.getElementsByClassName("tema")[0].appendChild(payaso)
   })
document.getElementsByClassName("sorpresa")[0].addEventListener("mouseout",()=>{
    document.getElementsByClassName("tema")[0].style.backgroundColor="rgb(150, 103, 150)"
    document.getElementsByClassName("tema")[0].removeChild(payaso)
  })

let botonsumar=document.getElementsByTagName("button")[2]
let botonrestar=document.getElementsByTagName("button")[3]
let espaciopuntos=document.createElement("p")
espaciopuntos.style.display="inline-block"
let totalpuntos=0
espaciopuntos.textContent=totalpuntos
document.getElementById("idTotal").style.display="inline-block"
document.getElementsByClassName("total")[0].appendChild(espaciopuntos)
botonsumar.addEventListener("click",()=>{
    totalpuntos=totalpuntos+50
    espaciopuntos.textContent=totalpuntos
})
botonrestar.addEventListener("click",()=>{
    totalpuntos=totalpuntos-50
    espaciopuntos.textContent=totalpuntos
})