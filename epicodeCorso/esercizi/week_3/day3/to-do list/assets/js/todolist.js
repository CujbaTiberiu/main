const newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const list = document.getElementById('list');

addTask.addEventListener('click', function () {
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    if (newTask.value === '') {
        return;
    } else {
        li.innerHTML = newTask.value;
        delBtn.innerHTML = 'Delete Task';
        delBtn.className = 'delBtn';
        list.appendChild(li);
        li.appendChild(delBtn);
        li.addEventListener('click', function () {
            li.classList.toggle('completata');
        });
    }
    newTask.value = '';
    delBtn.addEventListener('click', function () {
        list.removeChild(li);
    })
});


