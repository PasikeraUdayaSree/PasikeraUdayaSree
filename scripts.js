document.getElementById('cakeOrderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cakeType = document.getElementById('cakeType').value;
    const quantity = document.getElementById('quantity').value;

    if (name && email.includes('@') && cakeType && quantity > 0) {
        document.getElementById('confirmation').innerText =
            `Thank you, ${name}! Your order for ${quantity} ${cakeType} cake(s) has been placed.`;
    } else {
        document.getElementById('confirmation').innerText = 'Please fill out all fields correctly.';
    }
});

document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;
        li.addEventListener('click', function () {
            this.remove();
        });
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});
