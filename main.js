let input=document.getElementById("input");
let add=document.getElementById("add");
let clear=document.getElementById("clear");
let list=document.getElementById("list");

add.addEventListener("click",()=>{
    if(input.value.trim()===""){
        alert('Alert You need To Enter A Do Item')
    }else{
        let li=document.createElement("li")
        let remove=document.createElement("button")
        li.textContent=input.value;
        li.classList.add('items')
        remove.textContent="Remove"
        remove.classList.add('remove')
        list.appendChild(li)
        li.appendChild(remove)
         input.value=""
         
         remove.addEventListener('click', (e) => {
            if (e.target.className === 'remove') {
                e.target.parentElement.remove();
            }
        });
    }
})
