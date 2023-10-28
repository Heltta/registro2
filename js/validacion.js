// Get inputs
const campos = {
  name: document.getElementById('nombre'),
  lastname: document.getElementById('apellido'),
  email: document.getElementById('email'),
  password1: document.getElementById('password1'),
  password2: document.getElementById('password2'),
  terminos: document.getElementById('terminos'),
  btnTerminos: document.getElementById('buttonTerminosServicio'),
};

/**
 * Se le da un elemento de control de formulario para checkear su validacion
 * y un elemento que al que también debe mostrar el feedback de la validación
 * retorna true si la validacion es exitosa y false si no es válido
 *
 * @param {HTMLElement} domCompanieroDeFeedback Elemento que carece de validacion propia pero se le debe adjuntar un feedback identico al del otro elemento
 * @param {HTMLElement} domCampoParaValidar Elemento que tiene tiene requerimientos de validacion
 * @returns {Boolean}
 */
function validacionConFeedbackEnDosElementos(
  domCompanieroDeFeedback,
  domCampoParaValidar
) {
  const esValido = domCampoParaValidar.checkValidity();
  domCompanieroDeFeedback.classList.remove(
    !esValido ? 'is-valid' : 'is-invalid'
  );
  domCompanieroDeFeedback.classList.add(esValido ? 'is-valid' : 'is-invalid');
  return esValido;
}

function checkEqualPasswords() {
  if (campos.password1.value !== campos.password2.value) {
    campos.password1.setCustomValidity('La contraseña es incorrecta');
    campos.password2.setCustomValidity('La contraseña es incorrecta');
  } else {
    campos.password1.setCustomValidity('');
    campos.password2.setCustomValidity('');
  }
}

campos.password1.addEventListener('input', checkEqualPasswords);
campos.password2.addEventListener('input', checkEqualPasswords);
campos.terminos.addEventListener('input', (event) => {
  validacionConFeedbackEnDosElementos(campos.btnTerminos, event.target);
});

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
        checkEqualPasswords();
        const terminosChecked = validacionConFeedbackEnDosElementos(
          document.getElementById('buttonTerminosServicio'),
          campos.terminos
        );
        if (!form.checkValidity() || !terminosChecked) {
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
