const $form = document.querySelector('.todo__form');
const $todo_input = document.querySelector('.form__input');
const $label = document.querySelector('.form__label');
const $submit_btn = document.querySelector('.form__btn');
const $ul = document.querySelector('.todo__todos-list');

const $day = document.querySelector('.date__day');
const $date = document.querySelector('.date__date');
const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

$day.textContent = dayArr[new Date().getDay()];
$date.textContent = new Date().toString().slice(4, 15);

const addTodo = () => {
  if ($todo_input.value === '') return;

  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $check_input = document.createElement('input');
  const $delete_btn = document.createElement('button');
  
  $check_input.setAttribute('type', 'checkbox');
  $span.textContent = $todo_input.value;
  $delete_btn.textContent = 'x';
  
  $li.append($check_input, $span, $delete_btn);
  $ul.appendChild($li);
  
  $todo_input.value = '';
  $todo_input.focus();

  $delete_btn.onclick = e => {
    e.target.parentNode.remove();
  };

  $check_input.onchange = () => {
    $span.classList.toggle('checked');
  }
}

$form.onsubmit = e => {
  e.preventDefault();
  addTodo();
};

$todo_input.onfocus = () => {
  $label.textContent = '';
}

$todo_input.onblur = () => {
  if ($todo_input.value) return;
  $label.textContent = 'Add a task...';
}