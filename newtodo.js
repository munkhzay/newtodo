let tasks = [];
let editid = null;
let _enterTask = document.getElementsByClassName("enterTask");
let selectStatus = document.getElementById("selectStatus");

//Add-task-button
let taskbutton = document.createElement("button");
taskbutton.innerText = "Add Task";
taskbutton.setAttribute("class", "taskbutton");
let body = document.getElementsByTagName("div");
body[0].appendChild(taskbutton);
let submitBtn = document.getElementById("submitBtn");

//Enter-task-modal
function enterTask() {
  let enterTask = document.getElementsByClassName("enterTask");
  let input = document.getElementById("input");
  input.value = "";
  let selectStatus = document.getElementById("selectStatus");
  selectStatus.value = "";
  enterTask[0].style.display = "block";
}
taskbutton.onclick = enterTask;

//Create-task
function createTaskElement(id, text, checked) {
  let isChecked = checked ? "checked" : "";
  let taskHTML = `<div class="task">
      <input  type="radio" ${isChecked} />
      <p class="text">${text}</p>
      <div class="icons">
        <img class="edit" onclick= showEditModal(${id}) src="../todo.img/Frame (1).png" />
        <img class="trash" onclick=deleteTask(${id})  src="../todo.img/Frame.png" />
      </div>
    </div>`;
  return taskHTML;
}

//Delete-task
function deleteTask(id) {
  console.log(tasks);
  console.log(id);
  let indexTask = tasks.findIndex((task) => {
    if (task.id === id) {
      return task;
    }
  });
  tasks.splice(indexTask, 1);
  rendertasks();
}
let submitBtn2 = document.getElementById("submitBtn2");
let input = document.getElementById("input");
let editTaskk = document.getElementsByClassName("editTaskk");

//Edit-modal
function showEditModal(id) {
  editid = id;
  let task = tasks.find((task) => task.id === id);
  if (!task) {
    alert("Task not found!");
    return;
  }
  document.getElementById("input2").value = task.name;
  document.getElementById("selectStatus2").value = task.status;
  editTaskk[0].style.display = "block";
}

//Edit-task
function editSubmitTask() {
  let task = tasks.find((task) => task.id === editid);
  if (!task) return;

  task.name = document.getElementById("input2").value;
  task.status = document.getElementById("selectStatus2").value;

  editTaskk[0].style.display = "none";
  rendertasks();
  x;
}

submitBtn2.onclick = editSubmitTask;

//Submit-button
function submitTask() {
  let tasktext = input.value;
  let taskselect = selectStatus.value;
  let taskId = Math.random();
  let task = {
    id: taskId,
    name: tasktext,
    status: taskselect,
    isDone: false,
  };
  tasks.push(task);
  rendertasks();
  console.log(tasks);
  _enterTask[0].style.display = "none";
}
submitBtn.onclick = submitTask;

//Render-task
function rendertasks() {
  let todoNumber = 0;
  let inProcessNumber = 0;
  let doneNumber = 0;
  let blockedNumber = 0;
  let todoTasksHTML = "";
  let inprogressTasksHTML = "";
  let doneTasksHTML = "";
  let blockedTaskHTML = "";
  let frame2 = document.getElementsByClassName("frame2");
  let number1 = document.getElementsByClassName("number1");

  tasks.forEach((task) => {
    let taskId = task.id;
    let tasktext = task.name;
    let taskChecked = task.isDone;

    let taskHTML = createTaskElement(taskId, tasktext, taskChecked);
    if (task.status === "todo") {
      (todoTasksHTML = todoTasksHTML + taskHTML),
        (todoNumber = todoNumber++ + 1);
    }
    if (task.status === "inprogress") {
      (inprogressTasksHTML = inprogressTasksHTML + taskHTML),
        (inProcessNumber = inProcessNumber++ + 1);
    }
    if (task.status === "done")
      (doneTasksHTML = doneTasksHTML + taskHTML),
        (doneNumber = doneNumber++ + 1);
    if (task.status === "blocked")
      (blockedTaskHTML = blockedTaskHTML + taskHTML),
        (blockedNumber = blockedNumber++ + 1);
  });

  frame2[0].innerHTML = todoTasksHTML;
  frame2[1].innerHTML = inprogressTasksHTML;
  frame2[2].innerHTML = doneTasksHTML;
  frame2[3].innerHTML = blockedTaskHTML;
  number1[0].innerHTML = todoNumber;
  number1[1].innerHTML = inProcessNumber;
  number1[2].innerHTML = doneNumber;
  number1[3].innerHTML = blockedNumber;
}
rendertasks();
