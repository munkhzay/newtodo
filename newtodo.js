let tasks = [];
let editid = null;
let _enterTask = document.getElementsByClassName("enterTask");
let selectStatus = document.getElementById("selectStatus");

//taskbutton
let taskbutton = document.createElement("button");
taskbutton.innerText = "Add Task";
taskbutton.setAttribute("class", "taskbutton");
let body = document.getElementsByTagName("div");
body[0].appendChild(taskbutton);
let submitBtn = document.getElementById("submitBtn");

// entertask
function enterTask() {
  let enterTask = document.getElementsByClassName("enterTask");
  let input = document.getElementById("input");
  input.value = "";
  let selectStatus = document.getElementById("selectStatus");
  selectStatus.value = "";
  enterTask[0].style.display = "block";
}
taskbutton.onclick = enterTask;

/////createtask
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

/// deletetask
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

//edittask
function showEditModal(id) {
  editid = id;

  let taskIndex = tasks.findIndex((task) => task.id === id);
  taskIndex = tasks[taskIndex];
  let selectStatusEdit = selectStatus.value;
  let inputedit = input.value;
  let input2 = (document.getElementById("input2").value = inputedit);
  let selectStatus2 = (document.getElementById("selectStatus2").value =
    selectStatusEdit);
  console.log(selectStatus2);
  console.log(input2);
  console.log(taskIndex);
  editTaskk[0].style.display = "block";
  // modal haruulna
  rendertasks();
  console.log(taskIndex);
}

//edusubbutton
function editSubmitTask() {
  let input2 = document.getElementById("input2");
  input.value = input2.value;
  let selectStatus2 = document.getElementById("selectStatus2");
  selectStatus.value = selectStatus2.value;
  console.log(input);
  editTaskk[0].style.display = "none";
  rendertasks();
}
submitBtn2.onclick = editSubmitTask;

///edittask
//
// function editTask(id) {
//   let indexEditTask = tasks.findIndex((task) => {
//     if (task.id === id) return task;
//   });
//   tasks.splice(indexEditTask, 1);

// }

// function editsubtask() {
//   let tasktext = input2.value;
//   let taskselect = selectStatus2.value;
//   let editid = taskId;
//   let task2 = {
//     id: taskId,
//     name: tasktext2,
//     status: taskselect2,
//     isDone: false,
//   };
//   tasks.push(task2);
//   console.log(task2);
//   rendertasks();
//   editTaskk[0].style.display = "none";
// }
// console.log(editsubtask);
// submitBtn2.onclick = editsubtask;
//
// function editTask(id) {
//   let edittaskIndex = tasks.findIndex((task) => {
//     if (task.id === id) return task;
//   });
//   tasks[edittaskIndex] = submitTask();
//   // _enterTask[0].style.display = "block";
//   // tasks.splice(edittaskIndex);
//   rendertasks();
// }

//
// function deleteTask(id) {
//   console.log(id);
//   let taskIndex = tasks.findIndex((task) => {
//     if (task.id === id) {
//       return task;
//     }
//   });

//   tasks.splice(taskIndex, 1);
//   rendertasks();
// }

//
// function deleteTask(id) {
//   var task = tasks.find((id) => {
//     if (task.id === id) {
//       return task;
//     }
//     console.log(task);
//     tasks.splice(task);
//     rendertasks();
//   });
// }
// function deleteTask(id) {
//   let taskfilter = tasks.filter((task) => {
//     if (task.id === id) {
//       return task;
//     }
//   });
//   tasks.remove(taskfilter);
//   console.log(taskfilter);
//   rendertasks();
// }

//subbutton
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

//rendertask
function rendertasks() {
  let todoTasksHTML = "";
  let inprogressTasksHTML = "";
  let doneTasksHTML = "";
  let blockedTaskHTML = "";
  let todoNumber = "";
  let inProcessNumber = "";
  let blockedNumber = "";
  let doneNumber = "";
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

//

// let persons = [person2, person];

// console.log({ personIndex });

// let updatePersonData = {
//   name: "Baatar",
// };
// persons[personIndex] = updatePersonData;

// console.log(persons);

// function editPerson(id, updateData){
//   let personIndex = persons.findIndex((personitem) => {
//     if (person.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   persons[personIndex] = updateData

// }

// let updateData = {
//   name: "Baatar"
// }

// editPerson(182371287312, updateData)
