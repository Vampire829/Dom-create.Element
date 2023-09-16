//innerHtml

// const body = document.body;
// console.log(body)

// body.innerHTML = `
//    <form class="create-user-form">
//    <label>Name
//    <input type="text" name="userName" placeholder="Введите ваше имя">
//    </label>
//    <label>Password
//    <input type="password" name="password"  placeholder="Придумайте Пароль">
//    </label>
//    <button type="submit">Подвердить
//    </button>
//    </form>
// `
//document.createElement

// const form =document.createElement('form');
// body.append(form);
// const label1 =document.createElement('label');
// label1.textContent = 'Name'
// form.append(label1);
// const input1 = document.createElement('input');
// input1.type = "text";
// input1.name ="UserName";
// input1.placeholder ='Ведите ваше имя'
// label1.append(input1)
// const label2 = document.createElement('label');
// label2.textContent ="Password"
// label1.after(label2)
// const input2 = document.createElement('input');
// input2.type ='password';
// input2.name ='password';
// input2.placeholder ="Придумайте пароль"
// label2.append(input2)
// const button = document.createElement('button');
// button.textContent = 'Потвердить'
// button.type = 'submit'
// input2.after(button)

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]


const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox-form__checkbox';
    const inputId = `task-${taskId}`;
    inputCheckbox.id = inputId;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = inputId;

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.innerText = 'Удалить';

    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);

    return taskItem;
}

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});


