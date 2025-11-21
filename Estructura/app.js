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
    li.style.cursor = 'pointer';

    // Marcar tarea como completa al hacer click
    li.addEventListener('click', function() {
        this.style.textDecoration = this.style.textDecoration === 'line-thorugh' ? 'none' : 'line-through';
        this.style.opacity = this.style.opacity === '0.5' ? '1' : '0.5';
    });

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