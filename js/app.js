// creamos la función de validarFormulario

const inputs = document.querySelectorAll('#formulario input');
const textareas = document.querySelectorAll('#formulario textarea');

// Recorro todos los inputs
inputs.forEach((input) => {
	input.addEventListener('blur', validarFormulario);
});

textareas.forEach((textarea) => {
	textarea.addEventListener('blur', validarFormulario);
});

var errors = 0;

function validarFormulario(){

    $('.alert').remove();

    // DECLARACION DE VARIABLES
    var nombre = $('#nombre').val();
    var correo = $('#correo').val();
    var mensaje = $('#mensaje').val();

    if (nombre == '' || nombre == null) {
        cambiarBordeError('nombre');
        mostrarAlerta('nombre', 'Campo obligatorio, hasta 40 caracteres');
        errors++;
        return false;
    } else {
        var expresion = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            // mostrara un mensaje de que debe ingresar un nombre válido
            cambiarBordeError('nombre');
            mostrarAlerta('nombre', 'Nombre no válido');
            errors++;
            return false;
        } else {
            $('.alert').remove();
            cambiarBordeSuccess('nombre');
            errors = 0;
        }
    }

    if (correo == '' || correo == null) {
        cambiarBordeError('correo');
        mostrarAlerta('correo', 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo');
        errors++;
        return false;
    } else {
        var expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(!expresion.test(correo)){
            // mostrara un mensaje de que debe ingresar un nombre válido
            cambiarBordeError('correo');
            mostrarAlerta('correo', 'Correo no válido');
            errors++;
            return false;
        } else {
            $('.alert').remove();
            cambiarBordeSuccess('correo');
            errors = 0;
        }
    }

    if (mensaje == '' || mensaje == null) {
        cambiarBordeError('mensaje');
        mostrarAlerta('mensaje', 'Campo obligatorio, hasta 200 caracteres');
        errors++;
        return false;
    } else {
        var expresion = /^[, \\.\\ a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)){
            // mostrara un mensaje de que debe ingresar un nombre válido
            cambiarBordeError('mensaje');
            mostrarAlerta('mensaje', 'El mensaje no es válido');
            errors++;
            return false;
        } else {
            $('.alert').remove();
            cambiarBordeSuccess('mensaje');
            errors = 0;
        }
    }

    // $('form').submit();
    if (errors==0) {
        mostrarAlertaSuccess('button', 'El mensaje se enviado exitosamente. Muy pronto me pondré en contacto contigo'); 
        setTimeout(function(){ 
            $('.alert-success').remove(); 

            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("mensaje").value = "";

        }, 3000);
    }
    return true;
}

// FUNCION PARA CAMBIAR EL COLOR DEL BORDE DEL CAMPO
function cambiarBordeError(dato){
    $('#' + dato).css({
        border: "2px solid #FF0000"
    });
}

function cambiarBordeSuccess(dato){
    $('#' + dato).css({
        border: "2px solid #008000"
    });
}

// FUNCION PARA MOSTRAR MENSAJE DE ALERTA
function mostrarAlerta(dato, texto){
    $('#' + dato).after('<div class="alert">' + texto + '</div>');
}

function mostrarAlertaSuccess(dato, texto){
    $('#' + dato).after('<div class="alert-success">' + texto + '</div>');
}
