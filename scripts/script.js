const body = document.body;

// THEME TOGGLE
// Toggle input selector
const toggle = document.getElementById('toggle');
// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark" class based on if the media query matches
function toggleDarkMode(state) {
    if (state)
        body.classList.add("dark", state);
}

// Initial setting
toggleDarkMode(useDark.matches);

// Listen for changes in the OS settings
useDark.addEventListener('load', (e) => toggleDarkMode(e.matches));

 // Toggles the "dark-mode" class on click
 toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
  });

// TO DO ITEMS
const newItemInput = document.getElementById('to-do-input-field');
const todoList = document.querySelector('.to-dos ul');
const itemsLeft = document.querySelector('.items-left span');

itemsLeft.innerText = document.querySelectorAll('todo-item input[type="checkbox"]').length;

document.querySelector('.to-do-main span').addEventListener('click', () => {
    if (newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});
newItemInput.addEventListener('keypress', (e) => {
    if (e.charCode === 13 && newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});

function createNewTodoItem (text) {
    const elem = document.createElement('li');
    elem.classList.add('draggable');
    elem.setAttribute('draggable', true);
    elem.innerHTML = `
        <label id="todo-item">
        <input type="checkbox" name="todo-item"/>
        <span class="checkmark"></span>
        <span class="to-do-text">${text}</span>
        </label>
        <span class="delete"></span>
    `;

    if (document.querySelector('.filter input[type="radio"]:checked').id === 'completed') {
        elem.classList.add('hidden');
    }

  todoList.append(elem);
  updateItemsCount(1);
  addEventsDragAndDrop(elem);
}

// UPDATE ITEMS LEFT
function updateItemsCount(number) {
    itemsLeft.innerText = +itemsLeft.innerHTML + number;
}

// DELETE TODO ITEM
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        deleteTodoItem(event.target.parentElement);
    }
});

function deleteTodoItem(elem) {
    elem.remove();
    updateItemsCount(-1);
}

// CLEAR COMPLETED ITEMS
document.querySelector('.nav-items .clear-completed').addEventListener('click', () => {
    document.querySelectorAll('#todo-item input[type="checkbox"]:checked').forEach(item => {
        deleteTodoItem(item.closest('li'));
    });
});

// FILTER TODO ITEMS
document.querySelectorAll('.filter input').forEach(radio => {
    radio.addEventListener('change', (e) => {
        filterTodoItems(e.target.id);
        });
    });

function filterTodoItems(id) {
    const allItems = todoList.querySelectorAll('li');

    switch(id) {
        case 'all':
            allItems.forEach(item => {
                item.classList.remove('hidden');
            })
            break;
        case 'active':
            allItems.forEach(item => {
                item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
        default: 
            allItems.forEach(item => {
                !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
    }
}

// DRAG TODO ITEM
function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  };

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('over'); 
  }
  
  function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function dragEnd(e) {
    var listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function(item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }
  
function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }

  var listItems = document.querySelectorAll('.draggable');
  [].forEach.call(listItems, function(item) {
    addEventsDragAndDrop(item);
  });