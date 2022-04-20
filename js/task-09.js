// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.


// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  widgetRef : document.querySelector(".widget"),
  textRef: document.querySelector(".color"),
  btnRef: document.querySelector(".change-color"),
  bodyRef: document.body,
}

const onBtnClick = () => {
 refs.bodyRef.style.backgroundColor = getRandomHexColor();
 refs.textRef.textContent = refs.bodyRef.style.backgroundColor;
}
refs.btnRef.addEventListener("click", onBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
