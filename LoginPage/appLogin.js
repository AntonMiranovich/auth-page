class Log{
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
}}


const log=new Log()
const btn = document.querySelector("body .rightSection button");

btn.addEventListener("click", function () {
  try {
    const emailOrNum = document.querySelector(
      "body .rightSection .email input"
    );
    const password = document.querySelector(
      "body .rightSection .password input"
    );

    log.isValidAccount(emailOrNum.value);
    log.isValidPassword(password.value);

    alert("Вы успешно авторизованы в системе");
  } catch (error) {
    alert(error.message);
  }
});
