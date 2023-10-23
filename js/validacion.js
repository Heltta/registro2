// Get inputs
const campos = {
  name: document.getElementById('nombre'),
  lastname: document.getElementById('apellido'),
  email: document.getElementById('email'),
  password1: document.getElementById('password1'),
  password2: document.getElementById('password2'),
  terminos: document.getElementById('terminos'),
};

function checkPassword() {
  if (campos.password1.value !== campos.password2.value) {
    campos.password1.setCustomValidity('La contraseña es incorrecta');
    campos.password2.setCustomValidity('La contraseña es incorrecta');
  } else {
    campos.password1.setCustomValidity('');
    campos.password2.setCustomValidity('');
  }
}

campos.password1.addEventListener('input', checkPassword);
campos.password2.addEventListener('input', checkPassword);

// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
  'use strict';

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation');

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity() && campos.terminos.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// document.addEventListener('DOMContentLoaded', function () {
//   let formulario = document.getElementById('form');

//   formulario.addEventListener('submit', function (_event) {
//     if (!campos.terminos.checked) {
//       campos.terminos.setCustomValidity('Debes aceptar los terminos');
//     } else {
//       campos.terminos.setCustomValidity('');
//     }
//   });
// });
