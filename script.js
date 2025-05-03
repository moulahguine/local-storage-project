"use strict";

/**
 * Dynamic Tag Styler with localStorage
 *
 * This script allows users to select HTML tags (e.g., title, text)
 * and change their font color using a settings panel UI.
 *
 * Features:
 * - Toggle settings panel visibility
 * - Select a tag (like <h1> or <p>) to style
 * - Pick a color to apply to the selected tag
 * - Save selected tag and color in localStorage
 * - Automatically restore saved styles on page reload
 *
 * Clean variable naming and modular functions for readability and maintainability.
 * Suitable for learning DOM interaction, event handling, and persistent state.
 */

// Get settings button and panel
const toggleSettingsButton = document.querySelector(".settings-btn");
const settingsMenu = document.querySelector(".settings-panel");

// Check if button and panel exist, then add toggle functionality
if (toggleSettingsButton && settingsMenu) {
  toggleSettingsButton.addEventListener("click", () => {
    settingsMenu.classList.toggle("active");
  });
}

// Store elements (tags) that can be styled
const elements = {
  title: document.querySelector(".content_area h1"),
  text: document.querySelector(".content_area p"),
};

// Get tag and color options
const tagOptionItems = document.querySelector(".choose_tag ul").children;
const colorOptionItems = document.querySelector(".font_color ul").children;

let selectedTagKey = "";

// Restore saved tag and color
loadSavedTag(); // restore selected tag
applySavedColors(); // restore color for that tag

// When user selects a tag to style
[...tagOptionItems].forEach((tag) => {
  tag.addEventListener("click", (e) => {
    // Store selected tag as lowercase (matches keys in elements)
    selectedTagKey = e.target.innerHTML.toLowerCase();

    // Save to localStorage
    saveSelectedTag(selectedTagKey);

    // Update active UI style
    [...tagOptionItems].forEach((c) => c.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// When user selects a color
[...colorOptionItems].forEach((color) => {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("data-color");

    // Apply color only if tag is selected and exists in elements
    if (elements[selectedTagKey]) {
      elements[selectedTagKey].style.color = selectedColor;
      saveColorForSelectedTag(selectedColor);
    }
  });
});

function saveSelectedTag(tag) {
  localStorage.setItem("tag", tag);
}

function saveColorForSelectedTag(color) {
  if (selectedTagKey) {
    localStorage.setItem(`color_${selectedTagKey}`, color);
  }
}

// Restore saved tag AND update UI
function loadSavedTag() {
  const savedTag = localStorage.getItem("tag");
  if (savedTag && elements[savedTag]) {
    selectedTagKey = savedTag;

    // Restore active class on saved tag
    [...tagOptionItems].forEach((tag) => {
      if (tag.innerHTML.toLowerCase() === savedTag) {
        tag.classList.add("active");
      }
    });
  }
}

//  Apply saved color to restored tag only if valid
function applySavedColors() {
  for (let tag in elements) {
    const savedColor = localStorage.getItem(`color_${tag}`);
    if (savedColor) {
      elements[tag].style.color = savedColor;
    }
  }
}

const defaultBtn = document.querySelector("#default-label");

defaultBtn.addEventListener("click", () => {
  // Clear localStorage
  localStorage.clear();

  // Reset styles to default
  for (let tag in elements) {
    if (elements[tag]) {
      elements[tag].style.color = "";
    }
  }

  // remove active classes from selected UI
  [...tagOptionItems].forEach((item) => item.classList.remove("active"));
});

// // to do list app

// const inputs = {
//   title: document.querySelector(" .todoApp form .inputs .input_title"),
//   about: document.querySelector(" .todoApp form .inputs .input_about"),
// };

// const btnAddTask = document.querySelector(".todoApp form .btnAddTask");

// const arrOfTasks = [];

// function showTasks() {
//   if (inputs.title.value !== "" && inputs.about.value !== "") {
//     addTaskToArr(inputs.title.value, inputs.about.value);
//     inputs.title.value = "";
//     inputs.about.value = "";
//   }
// }

// btnAddTask.addEventListener("click", function (e) {
//   e.preventDefault();
//   showTasks();
// });

// function addTaskToArr(title, about) {
//   const titleData = {
//     id: Date.now(),
//     title: title,
//     about: about,
//     completed: false,
//   };
//   arrOfTasks.push(titleData);
//   addTasksToBox(arrOfTasks);
// }

// console.log(arrOfTasks);

// const boxHasList = document.querySelector(".todoApp .listTasks");
// function addTasksToBox(tasks) {
//   boxHasList.innerHTML = "";
//   tasks.forEach((task, i) => {
//     const mainContainer_task = document.createElement("div");
//     const container_task = document.createElement("main");
//     const content_task = document.createElement("div");
//     const title_task = document.createElement("h1");
//     const about_task = document.createElement("p");
//     const remove_task = document.createElement("button");
//     const btn_bottom = document.createElement("div");
//     const edit_task = document.createElement("button");
//     const share_task = document.createElement("button");

//     const del_alert = document.createElement("div");
//     const alert = document.createElement("div");
//     const p_alert = document.createElement("p");
//     const btn_alert = document.createElement("div");
//     const yes_del = document.createElement("button");
//     const no_del = document.createElement("button");

//     mainContainer_task.className = `task num_${i + 1}`;
//     mainContainer_task.id = task.id;
//     container_task.className = "container";
//     content_task.className = "content";
//     remove_task.className = "removeTaskBtn";
//     btn_bottom.className = "options";
//     edit_task.classList = "editTask";
//     share_task.classList = "shareTask";
//     del_alert.className = "co_alert";
//     alert.className = "alert";
//     p_alert.className = "p_alert";

//     title_task.innerHTML = task.title;
//     about_task.innerHTML = task.about;
//     remove_task.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
//     edit_task.innerHTML = `<i class="fa-solid fa-pen"></i>`;
//     share_task.innerHTML = `<i class="fa-solid fa-share-nodes"></i>`;
//     p_alert.innerHTML = "delete this task?";
//     yes_del.innerHTML = "yes";
//     no_del.innerHTML = "no";

//     boxHasList.appendChild(mainContainer_task);
//     mainContainer_task.appendChild(container_task);
//     container_task.appendChild(content_task);
//     content_task.appendChild(title_task);
//     content_task.appendChild(about_task);
//     container_task.appendChild(remove_task);
//     mainContainer_task.appendChild(btn_bottom);
//     btn_bottom.appendChild(edit_task);
//     btn_bottom.appendChild(share_task);
//     //document.querySelector(".container_todoApp").appendChild(del_alert);
//     del_alert.appendChild(alert);
//     alert.appendChild(p_alert);
//     alert.appendChild(btn_alert);
//     btn_alert.appendChild(yes_del);
//     btn_alert.appendChild(no_del);

//     content_task.addEventListener("click", () => {
//       document
//         .querySelectorAll(".todoApp .listTasks .options")
//         .forEach((option) => {
//           option.classList.remove("active");
//         });

//       btn_bottom.classList.add("active");
//     });
//     remove_task.addEventListener("click", () => {
//       document.querySelector(".container_todoApp").appendChild(del_alert);
//     });
//     [...btn_alert.children].forEach((btn) => {
//       if (btn.innerHTML.trim().toLowerCase() === "yes") {
//         btn.addEventListener("click", () => {
//           remove_task.parentElement.remove();
//           alert.parentElement.remove();
//         });
//       } else {
//         btn.addEventListener("click", () => {
//           alert.parentElement.remove();
//         });
//       }
//     });
//   });
// }

// ========== TODO LIST APP ==========

const selectors = {
  title: document.querySelector(".todoApp form .inputs .input_title"),
  about: document.querySelector(".todoApp form .inputs .input_about"),
  btnAddTask: document.querySelector(".todoApp form .btnAddTask"),
  listBox: document.querySelector(".todoApp .listTasks"),
  appContainer: document.querySelector(".container_todoApp"),
};

let tasks = []; // This could be initialized from localStorage in future

// ========== MAIN EVENT ==========
selectors.btnAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  const title = selectors.title.value.trim();
  const about = selectors.about.value.trim();
  if (!title || !about) return;

  addTask({ title, about });
  selectors.title.value = "";
  selectors.about.value = "";
});

// ========== CORE FUNCTIONS ==========

function addTask({ title, about }) {
  const newTask = {
    id: Date.now(),
    title,
    about,
    completed: false,
  };
  tasks.push(newTask);
  renderTask(newTask);
  saveTasks(); // optional
}

function renderTask(task) {
  const taskElement = createTaskElement(task);
  selectors.listBox.appendChild(taskElement);
}

function createTaskElement(task) {
  const main = document.createElement("div");
  main.className = "task";
  main.id = task.id;

  main.innerHTML = `
    <main class="container">
      <div class="content">
        <h1>${task.title}</h1>
        <p>${task.about}</p>
      </div>
      <button class="removeTaskBtn"><i class="fa-solid fa-xmark"></i></button>
    </main>
    <div class="options">
      <button class="editTask"><i class="fa-solid fa-pen"></i></button>
      <button class="shareTask"><i class="fa-solid fa-share-nodes"></i></button>
    </div>
  `;

  // Add Delete Confirmation Dialog
  const delAlert = document.createElement("div");
  delAlert.className = "co_alert";
  delAlert.innerHTML = `
    <div class="alert">
      <p class="p_alert">Delete this task?</p>
      <div>
        <button class="yesDel">Yes</button>
        <button class="noDel">No</button>
      </div>
    </div>
  `;

  // Event: show options on content click
  main.querySelector(".content").addEventListener("click", () => {
    document
      .querySelectorAll(".options")
      .forEach((opt) => opt.classList.remove("active"));
    main.querySelector(".options").classList.add("active");
  });

  // Event: trigger delete dialog
  main.querySelector(".removeTaskBtn").addEventListener("click", () => {
    selectors.appContainer.appendChild(delAlert);
  });

  // Events: handle delete confirmation
  delAlert.querySelector(".yesDel").addEventListener("click", () => {
    main.remove();
    delAlert.remove();
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks(); // optional
  });

  delAlert.querySelector(".noDel").addEventListener("click", () => {
    delAlert.remove();
  });

  return main;
}

// ========== Optional: Local Storage Handling ==========
function saveTasks() {
  localStorage.setItem("todo_tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem("todo_tasks");
  if (data) {
    tasks = JSON.parse(data);
    tasks.forEach(renderTask);
  }
}
loadTasks();
