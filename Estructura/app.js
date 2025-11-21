// Función para agregar tareas
function agregarTarea() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

    input.value = '';
}

// Event listener para el botón
document.getElementById('addBtn').addEventListener('click', agregarTarea);

// Event listener para presionar Enter
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});