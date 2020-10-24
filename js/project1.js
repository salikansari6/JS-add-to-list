let input=document.getElementById("add-todo");
let button=document.querySelector('button');


button.addEventListener('click',function(e) {
    e.preventDefault()
    let data=input.value 
    input.value=""
    if(data=="")
    {
        return;
    }
    let table=document.querySelector('tbody');


    let newentry=document.createElement('tr');
    let newdata1=document.createElement('td');
    let newdata2=document.createElement('td');
    let newdata3=document.createElement('td');
    
    table.appendChild(newentry);

    newentry.appendChild(newdata1);
    newentry.appendChild(newdata2);
    newentry.appendChild(newdata3);
    
    let check=document.createElement('input');
    check.setAttribute("type","checkbox");
    newdata1.appendChild(check);
    newdata2.textContent=data;
    newdata3.textContent="Pending";
    check.classList.add("todo-check")
    
    countFunction();


});





let tbody=document.querySelector("tbody");

tbody.addEventListener('dblclick',function(e) 
{
    if(e.target.nodeName=="TD"){
        e.target.parentNode.remove();
        countFunction();
    }
})

tbody.addEventListener('click',function(e) {
    if(e.target.nodeName=="INPUT"){
        if(e.target.checked==true){
            let tr=e.target.parentNode.parentNode;
            tr.classList.add('complete');
            // let newdata3=document.querySelectorAll(".status")
            e.target.parentNode.parentNode.lastElementChild.textContent="Complete";
        }
        else{
            let tr=e.target.parentNode.parentNode;
            tr.classList.remove('complete');
            e.target.parentNode.parentNode.lastElementChild.textContent="Pending";
    
    
        }
        countFunction();

    }

    
    
});

function countFunction(){
    let count=0;
    let complete=0;
    let checkboxes=document.querySelectorAll(".todo-check");
    for(let checkbox of checkboxes){
        count++;
        if(checkbox.checked){
            complete++;
        }

        
    }
    let display=document.querySelector(".display");
    display.innerHTML=`${count} Todo's Total, ${complete} Complete &amp; ${count-complete} Pending`;



}



countFunction();




