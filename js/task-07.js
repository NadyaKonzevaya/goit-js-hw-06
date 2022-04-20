// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const refs = {
    inputRef : document.querySelector('#font-size-control'),
    textRef: document.querySelector("#text"),
}

const onInputChange = (event) => {
    let fontSize = String(event.currentTarget.value);

    refs.textRef.style.fontSize = `${fontSize}px`;
}

refs.inputRef.addEventListener("change", onInputChange);

