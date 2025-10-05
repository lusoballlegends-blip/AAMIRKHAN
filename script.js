document.getElementById('year').innerText = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  setTimeout(()=> document.getElementById('form-success').style.display = 'none', 3000);
});