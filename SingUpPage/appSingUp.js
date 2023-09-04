// const btn = document.querySelector("body .rightSection button");

// function isValidAccount(valueAcc) {
//   if (
//     !/^\+375[0-9]{9}$|^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|gmail|mail|vk)(.com|.ru|.by|.net)$/gm.test(
//       valueAcc
//     )
//   )
//     throw new Error("Ваш Email или номер телефона введины неправильно");
// }

// function isValidPassword(valuePass) {
//   if (valuePass.length < 8)
//     throw new Error(
//       "Введенный пороль сльшком короткий. Пороль должен состоять из минимум 8 символов"
//     );
// }

// function isValidConfirmPass(valuePass,ConfirmPass){
//     if(valuePass!==ConfirmPass) throw new Error('Вы неверно повторили пороль')
// }

// btn.addEventListener("click", function () {
//   try {
//     const emailOrNum = document.querySelector(
//       "body .rightSection .email input"
//     );
//     const password = document.querySelector(
//       "body .rightSection .password input"
//     );
//     const passwordConfirm = document.querySelector(
//       "body .rightSection .rePassword input"
//     );

//     isValidAccount(emailOrNum.value);
//     isValidPassword(password.value);
//     isValidConfirmPass(password.value,passwordConfirm.value)

//     alert("Вы успешно зарегистрированы в системе");
//   } catch (error) {
//     alert(error.message);
//   }
// });

class Sing {
  isValidAccount(valueAcc) {
    if (
      !/^\+375[0-9]{9}$|^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|gmail|mail|vk)(.com|.ru|.by|.net)$/gm.test(
        valueAcc
      )
    )
      throw new Error("Ваш Email или номер телефона введины неправильно");
  }

  isValidPassword(valuePass) {
    if (valuePass.length < 8)
      throw new Error(
        "Введенный пороль сльшком короткий. Пороль должен состоять из минимум 8 символов"
      );
  }

  isValidConfirmPass(valuePass, ConfirmPass) {
    if (valuePass !== ConfirmPass)
      throw new Error("Вы неверно повторили пороль");
  }
}



const sing=new Sing()
btn = document.querySelector("body .rightSection button");
btn.addEventListener("click", function () {
  try {
    const emailOrNum = document.querySelector(
      "body .rightSection .email input"
    );
    const password = document.querySelector(
      "body .rightSection .password input"
    );
    const passwordConfirm = document.querySelector(
      "body .rightSection .rePassword input"
    );

    sing.isValidAccount(emailOrNum.value);
    sing.isValidPassword(password.value);
    sing.isValidConfirmPass(password.value, passwordConfirm.value);

    alert("Вы успешно зарегистрированы в системе");
  } catch (error) {
    alert(error.message);
  }
});
