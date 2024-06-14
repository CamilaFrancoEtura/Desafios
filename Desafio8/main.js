
    let boton = document.createElement("button");

    boton.id = "btnCarrito"; 

    boton.innerHTML = "Agregar al carrito";

    boton.addEventListener("click",mensaje );

    function mensaje () {
    
        let mensaje = document.createElement("h3");
        

        boton.innerHTML = "Agregado";
        

        document.appendChild(mensaje);
    };
    
    document.body.appendChild(boton)
   
