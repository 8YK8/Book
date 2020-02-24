let userName = prompt ("Who's there?", "");
if (userName == "Админ") {
    let password = prompt ("Пароль?", "");
  if (password == "Я Главный") {
      alert ("Здравствуйте!");
  } else if (password == "" || password == null) {
    alert ("Отменено");
  } else {
    alert ("Неверный пароль");
  }

}else if (userName = "" || userName == null){
  alert ("Отменено");
} else {
  alert ("I don't know you");
}
