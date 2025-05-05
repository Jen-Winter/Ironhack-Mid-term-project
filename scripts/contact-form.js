document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.querySelector('#Full-name');
  const emailInput = document.querySelector('.email-container input');
  const phoneInput = document.querySelector('.phone-container input');
  const submitButton = document.querySelector('.button-contactform');
  const successMessage = document.getElementById('form-success-message');

  phoneInput.addEventListener('input', function () {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
  });

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    let name = nameInput.value.trim().toLowerCase();
    let email = emailInput.value;
    let phone = phoneInput.value;

    let emailOkay = email.includes('@') && email.includes('.');
    let nameOkay = name !== 'ironhack';
    let phoneOkay = phone.length >= 7;

    if (emailOkay && nameOkay && phoneOkay) {
      successMessage.style.display = 'block';
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      document.querySelector('.message-container textarea').value = '';
    } else {
      if (!emailOkay) {
        alert('Please enter a valid email.');
      }
      if (!nameOkay) {
        alert('You cannot be Ironhack, because I am Ironhack.');
      }
      if (!phoneOkay) {
        alert('Please enter a valid phone number.');
      }
    }
  });
});
