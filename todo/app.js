const add=document.querySelector('.add');
const list=document.querySelector('.todos')
const search=document.querySelector('.search input')
const temp=todo=>{
    const html=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
        </li>
        `;
        list.innerHTML+=html;
};

add.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=add.add.value.trim();
    if(todo.length){
        temp(todo);
        add.reset();
    }
})

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos=(term)=>{
    Array.from(list.children)
      .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
      .forEach((todo)=> todo.classList.add('removed'))
    
    Array.from(list.children)
      .filter((todo)=>todo.textContent.toLowerCase().includes(term))
      .forEach((todo)=> todo.classList.remove('removed'))
};

search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
})