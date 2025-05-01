"use strict";

// let font_color = document.querySelectorAll(".font_color ul li");
// let font_size = document.querySelectorAll(".font_size ul li");
// let parg_test = document.querySelector("main .content p");
// let spanDefault = document.querySelector(".settings span");

// function applyLocal() {
//   let saveColor = window.localStorage.getItem("color");
//   let saveSize = window.localStorage.getItem("size");
//   let activeColor = window.localStorage.getItem("activeColor");
//   let activeSize = window.localStorage.getItem("activeSize");
//   if (saveColor) {
//     parg_test.style.color = saveColor;
//     font_color.forEach((all) => {
//       all.style.color = saveColor;
//     });
//     font_size.forEach((all) => {
//       all.style.color = saveColor;
//     });
//   }
//   if (saveSize) {
//     parg_test.style.fontSize = saveSize;
//   }
//   if (activeColor) {
//     font_color.forEach((el, index) => {
//       if (index === parseInt(activeColor)) {
//         el.classList.add("active");
//       }
//     });
//   }
//   if (activeSize) {
//     font_size.forEach((el, index) => {
//       if (index === parseInt(activeSize)) {
//         el.classList.add("active");
//       }
//     });
//   }
// }
// applyLocal();

// font_color.forEach((ele, index) => {
//   ele.addEventListener("click", function () {
//     font_color.forEach((el) => el.classList.remove("active"));
//     spanDefault.classList.remove("active");
//     window.localStorage.setItem("activeColor", index);
//     window.localStorage.setItem("color", ele.attributes[0].value);
//     applyLocal();
//     console.log(ele.attributes[0].value);
//   });
// });

// font_size.forEach((ele, index) => {
//   ele.addEventListener("click", function () {
//     font_size.forEach((el) => el.classList.remove("active"));
//     spanDefault.classList.remove("active");
//     window.localStorage.setItem("size", ele.innerHTML);
//     window.localStorage.setItem("activeSize", index);
//     applyLocal();
//   });
// });

// spanDefault.addEventListener("click", function (el) {
//   window.localStorage.clear();
//   spanDefault.classList.add("active");
//   location.reload();
// });

//=============================================

// let add_btn = document.querySelector(".to_do_list .box_input .add_btn");
// let input = document.querySelector(".to_do_list .box_input .text_input");
// let box_list = document.querySelector(".box_list");

// let arrayOfTasks = [];

// if (localStorage.getItem("task")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("task"));
// }

// getTaskFromLStorage();

// function addtask() {
//   if (input.value !== "") {
//     addTaskToArray(input.value);
//     input.value = "";
//   }
// }

// add_btn.addEventListener("click", addtask);
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     addtask();
//   }
// });
// function addTaskToArray(taskText) {
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     completed: false,
//   };
//   arrayOfTasks.push(task);
//   addTaskToBoxlist(arrayOfTasks);
//   addTaskToLStorage(arrayOfTasks);
// }

// function addTaskToBoxlist(tasksFromArr) {
//   box_list.innerHTML = "";
//   tasksFromArr.forEach((task, index) => {
//     let listOfTask = document.createElement("div");
//     listOfTask.id = task.id;
//     listOfTask.className = `list ${index + 1}`;
//     let paraghOfTask = document.createElement("p");
//     paraghOfTask.innerHTML = task.title;
//     let remove_btn = document.createElement("button");
//     remove_btn.innerHTML = "remove";
//     remove_btn.className = "remove_btn";
//     listOfTask.appendChild(paraghOfTask);
//     listOfTask.appendChild(remove_btn);
//     box_list.appendChild(listOfTask);
//     remove_btn.addEventListener("click", (e) => {
//       e.target.parentElement.remove();
//       removeFromlStorage(e.target.parentElement.getAttribute("id"));
//       console.log(e.target.parentElement.getAttribute("id"));
//     });
//   });
// }

// function addTaskToLStorage(tasks) {
//   window.localStorage.setItem("task", JSON.stringify(tasks));
// }

// function getTaskFromLStorage() {
//   let data = window.localStorage.getItem("task");
//   if (data) {
//     let tasks = JSON.parse(data);
//     addTaskToBoxlist(tasks);
//   }
// }

// function removeFromlStorage(remove) {
//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != remove);
//   addTaskToLStorage(arrayOfTasks);
// }

// let add_btn = document.querySelector(".to_do_list .box_input .add_btn");
// let input = document.querySelector(".to_do_list .box_input .text_input");
// let box_list = document.querySelector(".box_list");

// let dataTasksArr = [];

// function showTasks() {
//   if (input.value !== "") {
//     addTasksToArr(input.value);
//     input.value = "";
//   }
// }

// add_btn.addEventListener("click", showTasks);

// function addTasksToArr(task) {
//   const dataTask = {
//     id: Date.now(),
//     title: task,
//     completed: false,
//   };
//   dataTasksArr.push(dataTask);
//   showTasksOnBox(dataTasksArr);
//   checkBoxes();
//   addTasksInLS(dataTasksArr);
//   checkBoxes();
// }

// function showTasksOnBox(tasks) {
//   box_list.innerHTML = "";
//   tasks.forEach((task, i) => {
//     let mainTagForTask = document.createElement("div");
//     mainTagForTask.id = task.id;
//     mainTagForTask.className = `list num-${i + 1}`;
//     box_list.appendChild(mainTagForTask);
//     let paragraphValue = document.createElement("p");
//     paragraphValue.innerHTML = task.title;
//     mainTagForTask.appendChild(paragraphValue);
//     let removeIte_btn = document.createElement("button");
//     removeIte_btn.className = "remove_btn";
//     removeIte_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
//     mainTagForTask.appendChild(removeIte_btn);
//     removeIte_btn.addEventListener("click", removeTask);
//     console.log(removeIte_btn.parentElement);
//   });
// }

// function addTasksInLS(task) {
//   window.localStorage.setItem("task", JSON.stringify(task));
// }

// function getTasksFromLS() {
//   let data = JSON.parse(window.localStorage.getItem("task"));
//   if (data) {
//     showTasksOnBox(data);
//     checkBoxes();
//   }
// }

// getTasksFromLS();

// function removeTask(tasks) {
//   if (tasks.target.parentElement) {
//     tasks.target.parentElement.remove();
//     console.log(tasks.target.parentElement.getAttribute("id"));
//     dataTasksArr = dataTasksArr.filter(
//       (task) => task.id != tasks.target.parentElement.getAttribute("id")
//     );
//   }
//   addTasksInLS(dataTasksArr);
//   checkBoxes();
// }

// function checkBoxes() {
//   let clearAll_btn = document.querySelector(".clearAll_btn");
//   if (box_list.children.length >= 3) {
//     clearAll_btn.style.display = "block";
//   } else {
//     clearAll_btn.style.display = "none";
//   }
// }

const settingsBtn = document.querySelector(".settings-btn");
const settingsPanel = document.querySelector(".settings-panel");

if (settingsBtn && settingsPanel) {
  settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.toggle("active");
  });
}

let currentTarget = "";

const elements = {
  title: document.querySelector(".content_area h1"),
  text: document.querySelector(".content_area  p"),
};
const choose_tag = document.querySelector(".choose_tag ul ").children;
const font_color = document.querySelector(".font_color ul ").children;

[...choose_tag].forEach((tag) => {
  tag.addEventListener("click", (e) => {
    currentTarget = e.target.innerHTML.toLowerCase();
    console.log("Now editing", currentTarget);
    [...choose_tag].forEach((c) => c.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

[...font_color].forEach((color) => {
  color.addEventListener("click", () => {
    if (elements[currentTarget]) {
      elements[currentTarget].style.color = `${color.getAttribute(
        "data-color"
      )}`;
    }
  });
});
