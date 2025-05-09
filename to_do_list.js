document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("submit");
    const newTask = document.getElementById("task");
    const taskList = document.getElementById("tasks");
    const form = document.querySelector("form");
    
    submit.disabled = true;// Disable submit button by default

    // Enable/disable submit button based on input
    newTask.addEventListener("input", function () {
        submit.disabled = newTask.value.trim() === "";
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const taskText = newTask.value.trim();
        if (taskText === "") return;

        // Create a new list item and add the task
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Add new element to the unordered list
        taskList.appendChild(listItem);

        newTask.value = "";
        submit.disabled = true;
    });
});
