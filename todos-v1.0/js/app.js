// 날짜
const $day = document.querySelector('.date__day');
const $date = document.querySelector('.date__date');
const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

$day.textContent = dayArr[new Date().getDay()];
$date.textContent = new Date().toString().slice(4, 15);

// 할 일 추가
const $form = document.querySelector('.todo__form');
const $todo_input = document.querySelector('.form__input');
const $label = document.querySelector('.form__label');
const $ul = document.querySelector('.todo__todos-list');

const addTodo = () => {
  const $li = document.createElement('li');
  const $todo_label = document.createElement('label');
  const $check_input = document.createElement('input');
  const $delete_btn = document.createElement('button');
  
  $check_input.setAttribute('type', 'checkbox');
  $todo_label.textContent = $todo_input.value;
  $delete_btn.textContent = 'x';
  
  $li.append($check_input, $todo_label, $delete_btn);
  $ul.appendChild($li);
  
  $todo_input.value = '';
  $todo_input.focus();

  $delete_btn.onclick = e => {
    e.target.parentNode.remove();
  };

  $check_input.onchange = () => {
    $todo_label.classList.toggle('checked');
  }
}

$form.onsubmit = e => {
  if ($todo_input.value === '') return;
  e.preventDefault();
  addTodo();
};

// label 이벤트
$todo_input.onfocus = () => {
  $label.textContent = '';
}

$todo_input.onblur = () => {
  if ($todo_input.value) return;
  $label.textContent = 'Add a task...';
}