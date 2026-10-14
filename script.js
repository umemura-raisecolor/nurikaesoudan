document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const message = document.getElementById('form-message');
      message.textContent = 'デモのため送信はされません。実際には、このあと担当者からお電話でご連絡する流れになります。';
      message.style.color = '#a9502b';
      message.style.fontWeight = '700';
      message.scrollIntoView({behavior:'smooth', block:'nearest'});
    });
  }
});
