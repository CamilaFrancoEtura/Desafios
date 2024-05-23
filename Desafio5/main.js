let Producto = {
nombre: "camisa",
CantidadProd: 5,
Precio: 300

}
console.log(Producto)
Producto.nombre = "Zapatillas"
Producto.categoria = "Calzado"

console.log(Producto)
delete Producto.CantidadProd;

console.log(Producto)