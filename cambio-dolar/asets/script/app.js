
const resultado = document.getElementById('resultado');
const InputDolares = document.getElementById('montoDolares');


function imprimirMonto() {
    const dolar = 745;
    const montoDolares = InputDolares.value * 1;
    const montoPesos = montoDolares * dolar;
    
    if (!montoDolares) {
        alert('Ingresa solo cantidades mayores a cero')
    };
    
    console.log(typeof(montoDolares));
    console.log(typeof(montoPesos));

    return `
            <div class="alert alert-success mt-3">
                <strong>$${montoDolares.toLocaleString('en-US')} USD = $${montoPesos.toLocaleString('es-CL')} CLP</strong>
            </div>
            
            `;

    
};

InputDolares.addEventListener('input', () => {
    resultado.innerHTML = imprimirMonto();
});

