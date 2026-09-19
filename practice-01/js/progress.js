"use strict";

const totalTasks = 10;
const completedTasks = 4;


const start = "Не начато";
const mid = "В работе";
const end = "Завершено";

if (typeof totalTasks === "string" || typeof completedTasks === "string") {
  console.log("Ошибка: вместо числа передана строка.")
}
else if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение.")
}
else if (!Number.isInteger(completedTasks) || !Number.isInteger(totalTasks)) {
  console.log("Ошибка: дробное количество задач.");
}
else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: отрицательное количество.");
}
else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше, чем существует.");
}
else if (totalTasks > 1000) {
  console.log("Ошибка: превышена верхняя граница.")
}
else if (totalTasks === 0) {
  console.log("Задач пока нет.")
}
else {
  const percent = completedTasks / totalTasks * 100;
  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${totalTasks - completedTasks}`);
  console.log(`Прогресс: ${percent.toFixed(1)}%`);
  if (completedTasks === 0) {
    console.log(`Статус: ${start}`);
  }
  else if (completedTasks === totalTasks) {
    console.log(`Статус: ${end}`);
  }
  else {
    console.log(`Статус: ${mid}`);
  }
  
}
