
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }
});
