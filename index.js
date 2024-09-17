// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.
const image = document.querySelectorAll('img');
image.forEach((select) => {
  select.addEventListener('mouseenter', () => {
    select.classList.add('grayscale');
  });
  select.addEventListener('mouseleave', () => {
    select.classList.remove('grayscale');
  });
});
/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/
window.addEventListener('keydown', (e) => {
  const body = document.querySelector('body');
  if (e.key === '1') {
    body.classList.add('theme1');
    body.classList.remove('theme2', 'theme3');
  } else if (e.key === '2') {
    body.classList.add('theme2');
    body.classList.remove('theme1', 'theme3');
  } else if (e.key === '3') {
    body.classList.add('theme3');
    body.classList.remove('theme1', 'theme2');
  } else if (e.key === 'Escape') {
    body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/
const input = document.querySelector('footer input');
const button = document.querySelector('footer button');
input.addEventListener('input', (e) => {
  input.value = input.value.toUpperCase();
  if (input.value.length < 5) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/

const form = document.querySelector('footer form');

form.addEventListener('submit', () => {
  const value = input.value;
  const submitResult = document.querySelector('#submitResult');
  submitResult.textContent = `${value} başarı ile kaydedildi...`;
  input.value = '';
  const button = document.querySelector('footer button');
  button.disabled = true;
});
