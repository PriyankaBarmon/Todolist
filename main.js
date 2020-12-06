const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');
const itemList = document.querySelector('.notcompleted');
const addButton = document.querySelector('.btn-add');


function addList(){
    if(input.value !== ''){
        const html = `
        <li><span>${input.value}</span>
        <button class="btn-done"><i class="fa fa-check" aria-hidden="true"></i></button>
        <button class="btn-remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </li>
        `
        itemList.insertAdjacentHTML('beforeend', html)
        input.value = '';
    }
}

addButton.addEventListener('click', addList)
input.addEventListener('keydown', e => {
  if(e.keyCode === 13){
    addList()
  }
})


itemList.addEventListener('click', e => {
  if(e.target.closest('.btn-remove')){
    const li = e.target.closest('.btn-remove').parentElement
    li.parentElement.removeChild(li)
  }
  if(e.target.closest('.btn-done')){
    const li = e.target.closest('.btn-done').parentElement
    li.children[0].style.textDecoration = 'line-through'
    li.removeChild(e.target.closest('.btn-done'))
  }
})
