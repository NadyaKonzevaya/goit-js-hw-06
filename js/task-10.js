// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.



const refs = {
  controlsRef : document.querySelector("#controls"),
  inputRef : document.querySelector("input"),
  btnCreateRef : document.querySelector("[data-create]"),
  btnDestroyRef : document.querySelector("[data-destroy]"),
  parentBoxRef : document.querySelector("#boxes")
}

const getAmount = (event) => {
  const amount = refs.inputRef.value;
  console.log(amount);
  createBoxes(amount);
}

const destroyBoxes = () => {
  refs.parentBoxRef.innerHTML = "";
  refs.inputRef.value = "";
}


const createBoxes = (amount) => {
  let divs = [];
  const mainSize = 30;

  for (let i = 0; i < amount; i +=1 ) {
  const divEl = document.createElement("div");
  divEl.style.width = `${mainSize + i * 10}px`;
  divEl.style.height = `${mainSize + i * 10}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  
  divs.push(divEl)
  };

  

refs.parentBoxRef.append(...divs);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


  refs.btnCreateRef.addEventListener("click", getAmount);
  refs.btnDestroyRef.addEventListener("click", destroyBoxes);



