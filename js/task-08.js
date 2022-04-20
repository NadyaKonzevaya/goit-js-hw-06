// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


    const formRef = document.querySelector(".login-form")
    const emailRef = document.querySelectorAll("input")[0];
    const passwordRef = document.querySelectorAll("input")[1];
    const btnRef = document.querySelector("button");


    const onFormSubmit = (event) => {
        event.preventDefault();
        if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
            alert("Заполните обязательные поля");
        } else {
            
            // const formData = new FormData(event.currentTarget);
            // formData.forEach((email, password) => {
            //     console.log(email);
            //     console.log(password);
            // })
            // console.log(formData);
            const key1 = emailRef.getAttribute("name");
            const key2 = passwordRef.getAttribute("name");
                       const data = {
                [key1] : event.currentTarget.elements.email.value,
                [key2]: event.currentTarget.elements.password.value,

            }
            console.log(data);
            formRef.reset();
           
          
        }

    }
    formRef.addEventListener("submit", onFormSubmit);
