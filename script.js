document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('lista-tareas');
    const searchInput = document.getElementById('buscar');

    let tasks = [];

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', updateTask);

    function addTask(event) {
        event.preventDefault();
        
        const title = document.getElementById('titulo').value;
        const description = document.getElementById('descripcion').value;
        const dueDate = document.getElementById('fecha-vencimiento').value;
        const priority = document.getElementById('prioridad').value;

        const task = {
            title,
            description,
            dueDate,
            priority,
            status: 'Pendiente'
        };

        tasks.push(task);
        displayTasks();
        taskForm.reset();
    }