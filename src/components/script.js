const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});