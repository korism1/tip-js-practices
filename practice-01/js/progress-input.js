"use strict";

const totalTasksInput = " 12 ";
const completedTasksInput = "5";


const start = "Не начато";
const mid = "В работе";
const end = "Завершено";

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
  console.log("Ошибка: на вход должны поступать только строки.");
} 
else {
  const totalTrimmed = totalTasksInput.trim();
  const completedTrimmed = completedTasksInput.trim();

  if (totalTrimmed === "" || completedTrimmed === "") {
    console.log("Ошибка: пустой ввод недопустим.");
  } 
  else {
    const totalTasks = Number(totalTrimmed);
    const completedTasks = Number(completedTrimmed);

    if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
      console.log("Ошибка: недопустимое числовое значение.");
    }
    else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
      console.log("Ошибка: значение не должно быть бесконечностью.");
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
      console.log("Ошибка: превышена верхняя граница.");
    }
    else if (totalTasks === 0) {
      console.log("Задач пока нет.");
    }
    else {
      const percent = (completedTasks / totalTasks) * 100;
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
  }
}
