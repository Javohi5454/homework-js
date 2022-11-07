const time = Number(prompt(`Введите время`))

if ( time >= 22 && time <=24 || time >= 1 && time <= 4 ) {
  console.log(`Доброй ночи`);
}
else if  (time >= 5 && time <= 12 ) {
  console.log(`Доброе утро`);
}
else if (time >= 12 && time <= 18) {
  console.log(`Добрый день`);
}
else if (time >= 18 && time <= 22) {
  console.log(`Добрый вечер`);
}
else{
  console.log(`Что то пошло не так`);
}
