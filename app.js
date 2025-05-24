
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (!form) return; // prevención extra

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_jv8vfyt', 'template_5s6ntbp', this, 'lmxIIoP3UwV0axsqa')
      .then(function () {
        document.getElementById('form-status').innerText = '¡Mensaje enviado con éxito!';
        form.reset();
      }, function (error) {
        document.getElementById('form-status').innerText = 'Ocurrió un error. Intentá nuevamente.';
        console.error('EmailJS error:', error);
      });
  });
});
