document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Lógica para enviar el formulario por correo electrónico usando EmailJS
    emailjs.sendForm('service_your_service_id', 'template_your_template_id', this)
      .then(function(response) {
        console.log('Correo electrónico enviado', response);
        alert('Correo electrónico enviado con éxito');
      }, function(error) {
        console.error('Error al enviar el correo electrónico', error);
        alert('Ocurrió un error al enviar el correo electrónico');
      });
  });