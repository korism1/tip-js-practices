"use strict";

const totalTasks = 10;
const completedTasks = 7;
const dailyLimit = 3;

if (typeof totalTasks === "string" || typeof completedTasks === "string" || typeof dailyLimit === "string") {
  console.log("Ошибка: вместо числа передана строка.");
}
else if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks) || Number.isNaN(dailyLimit)) {
  console.log("Ошибка: недопустимое числовое значение.");
}
else if (!Number.isInteger(completedTasks) || !Number.isInteger(totalTasks) || !Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дробное количество задач.");
}
else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: отрицательное количество.");
}
else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше, чем существует.");
}
else if (totalTasks > 1000) {
  console.log("Ошибка: превышена upper граница.");
}
else if (dailyLimit < 1 || dailyLimit > 1000) {
  console.log("Ошибка: дневная норма должна быть от 1 до 1000.");
}
else if (totalTasks === 0) {
  console.log("Задач пока нет.");
}
else {
  let ostTasks = totalTasks - completedTasks;
  console.log(`Осталось задач: ${ostTasks}`);

  if (ostTasks === 0) {
    console.log("Потребуется дней: 0");
  } 
  else {
    let day = 0;

    while (ostTasks > 0) {
      day += 1;
      
      let tasksDoneToday;
      if (dailyLimit < ostTasks) {
        tasksDoneToday = dailyLimit;
      } else {
        tasksDoneToday = ostTasks;
      }

      ostTasks -= tasksDoneToday;

      console.log(`День ${day}: выполнено ${tasksDoneToday}, осталось ${ostTasks}`);
    }

    console.log(`Потребуется дней: ${day}`);
  }
}
