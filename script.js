// when btn is pressed, display tasks
const tasksArr = [
  "medical coding",
  "programming",
  "Network+",
  "personal growth",
];

let btn = document.getElementById("btn");

// grab all task
let tasks = document.querySelectorAll(".task");
console.log(tasks);

// each task is random
function randomTask() {
  // get random
  let result = tasksArr[Math.floor(Math.random() * tasksArr.length)];
  return String(result);
}

function taskBtn() {
  tasks.forEach((task) => {
    task.textContent = randomTask();
  });
}
