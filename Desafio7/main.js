
const productos = ["Camisas", "Perfumes", "Zapatos",];


const body = document.body;

for (const producto of productos) {
    const h2 = document.createElement("h2");
    h2.innerHTML = producto;
    body.appendChild(h2);
}
console.log(productos)