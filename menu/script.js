let hamburgerButton = document.querySelector('#hamburger')
let navigation = document.querySelector('#navigation')

hamburgerButton.addEventListener('click', function() {
  hamburgerButton.classList.toggle('open');
  navigation.classList.toggle('show');
})