
function sumarProductos(precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado
}
let nombreProducto = alert("Harina"); 
let precioUnidad = 100
let cantidad = parseInt(prompt("Ingrese la cantidad deseada del producto:"));
let total = sumarProductos(precioUnidad,cantidad)
console.log("El total gastado es: $" + total);
