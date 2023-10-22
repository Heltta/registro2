// Get inputs
const campos = {
  name: document.getElementById('nombre'),
  lastname: document.getElementById('apellido'),
  email: document.getElementById('email'),
  password1: document.getElementById('password1'),
  password2: document.getElementById('password2'),
  terminos: document.getElementById('terminos'),
};

function contraseñademasiadoCorta() {
  return campos.password1.value.length <= 6;
}

function esIgual() {
  return campos.password1.value == campos.password2.value;
}

// function ningunVacio() {
//   for (const key in campos) {
//     if (!campos[key].value) {
//       return false;
//     }
//   }
// }

function showAlertSuccess() {
  document.getElementById('alert-success').classList.add('show');
}

function showAlertError() {
  document.getElementById('alert-danger').classList.add('show');
}

(document.getElementsByTagName("form"))[0].addEventListener('submit', (event) => {
  if (!event.checkValidity() || contraseñademasiadoCorta() || !esIgual()) {
    event.preventDefault()
    showAlertError();
  } else {
    showAlertSuccess();
  }
});


// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity() && campos.terminos.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
