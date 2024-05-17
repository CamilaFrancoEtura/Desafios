
const productos =  ["Camiseta", "Pantalon","Zapatos"];

for (let i = 0; i <= productos.length; i++) {
    console.log(productos[i]);
}

let productoVendido = productos.pop(); 

for (let i = 0; i < productos.length; i++) {
 
    console.log(`Nuevo stock: ${productos}`);
}
