const boton = document.querySelector('.calcular');
const resultado = document.getElementById('resultado');

function verificarRequisitos() {
    let nombre = document.getElementById('nombrePostulante').value.trim();
    let edad = document.getElementById('edadPostulante').value;
    let cedulaVigente = document.getElementById('btnradio1').checked;
    let ahorro = document.getElementById('ahorroPostulante').value;
    let porcentaje = document.getElementById('porcentajePostulante').value;

    if (nombre === '' || edad === '' || ahorro === '' || porcentaje === '' || 
        (!document.getElementById('btnradio1').checked && !document.getElementById('btnradio2').checked)) {
        alert('Debes completar todos los campos correctamente');
        return null;
    }

    // Validar que edad, ahorro y porcentaje sean números válidos
    if (edad <= 0) {
        alert('La edad debe ser un numero positivo');
        return null;
    }

    //  Validar que ahorro no se un numero negativo
    if (ahorro < 0) {
        alert('El ahorro no puede ser negativo');
        return null;
    }

    //  Validar que el porcentaje no sea un numero negativo
    if (porcentaje <= 0 || porcentaje > 100) {
        alert('El porcentaje debe estar entre 1 y 100');
        return null;
    }
    
    let cumple = true;
    let mensaje = `Hola ${nombre}:<br><br>`;

    
    // Verificar edad >= 18
    mensaje += edad < 18 ? (cumple = false, "❌ Debes ser mayor de 18 años<br>") : "✅ Cumples con la edad mínima<br>";
    
    // Verificar cédula vigente
    mensaje += !cedulaVigente ? (cumple = false, "❌ Necesitas tener cédula de identidad vigente<br>") :  "✅ Tienes cédula vigente<br>";  

    // Verificar ahorro >= 4 UF
    mensaje += ahorro < 4 ? (cumple = false, "❌ Necesitas al menos 4 UF de ahorro<br>") : "✅ Cumples con el ahorro mínimo<br>";

    // Verificar porcentaje <= 70%
    mensaje += porcentaje > 70 ? (cumple = false, "❌ Debes estar en el 70% más vulnerable<br>") : "✅ Cumples con el requisito socioeconómico<br>"; 

    // Mensaje final
    mensaje += cumple ? ("<br><strong>🎉 ¡FELICITACIONES! Cumples con todos los requisitos para postular al subsidio</strong>") : "<br><strong>❌ Lo sentimos, no cumples con todos los requisitos</strong>";

    return mensaje;
}

boton.addEventListener('click', function(e) {
    e.preventDefault();
    
    const mensajeResultado = verificarRequisitos();
    
    // Solo mostrar el modal si las validaciones pasaron
    if (mensajeResultado !== null) {
        resultado.innerHTML = mensajeResultado;
        
        // Abrir modal con resultado
        const modal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
        modal.show();
    }
});


function limpiarFormulario() {
    document.getElementById('nombrePostulante').value = '';
    document.getElementById('edadPostulante').value = '';
    document.getElementById('btnradio1').checked = false;
    document.getElementById('btnradio2').checked = false;
    document.getElementById('ahorroPostulante').value = '';
    document.getElementById('porcentajePostulante').value = '';
}


