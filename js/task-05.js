// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const refs = {
    inputRef : document.querySelector("#name-input"),
    outputRef : document.querySelector("#name-output"),
}


const onInputChange = () => {
    refs.outputRef.textContent = (refs.inputRef.value) ? refs.inputRef.value : "Anonymous"; 
    // if (refs.inputRef.value === "") {
    //     refs.outputRef.textContent = "Anonymous";
    // } else {
    // refs.outputRef.textContent = refs.inputRef.value
    // }
}

refs.inputRef.addEventListener("input", onInputChange);
