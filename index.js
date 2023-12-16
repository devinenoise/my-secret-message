const { hash } = window.location;
const decryptedMessage = atob(hash.replace('#', ''));

if (decryptedMessage) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = decryptedMessage;
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const messageForm = document.querySelector('#message-form');
  messageForm.classList.add('hide');
  const linkForm = document.querySelector('#link-form');
  linkForm.classList.remove('hide');

  const messageInput = form.querySelector('#message-input');
  const base64EncodedString = btoa(messageInput.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${base64EncodedString}`;
  linkInput.select();
});
