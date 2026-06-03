 
 let count=0;
 let currentRow=null;
 function add_(){
    // انا هنا بستدعي كل حاجه من الفورم
      Name_=document.getElementsByClassName("Text")[0];
     Age_=document.getElementsByClassName("Text")[1];
     City_=document.getElementsByClassName("Text")[2];
     buttun=document.querySelector('input[value="Updat"],input[value="Add"]')
     Table_=document.getElementsByTagName("tbody")[0];
    //  هنا بقوله لو الفورم اتملى كريت الصف 
if(Name_.value&&Age_.value&&City_.value){
     if(buttun.value==="Add"){
     count++;
    let tr_ = document.createElement("tr");
     let td_Id=document.createElement("td");
     let td_name = document.createElement("td");
     let td_age= document.createElement("td");
     let td_city=document.createElement("td");
     let td_edit=document.createElement("td");
     let td_delete=document.createElement("td");
     // زرار التعديل
     let td_edit_value=document.createElement("input");
     td_edit_value.type='button';
     td_edit_value.value='Edit';
     td_edit_value.addEventListener("click",function(){
          Name_.value= td_name.textContent;
          Age_.value= td_age.textContent;
          City_.value=td_city.textContent;
          buttun.value='Updat'
          buttun.style.backgroundColor="yellow"
          currentRow=tr_})
     // زرار المسح
     let td_delete_value=document.createElement("input");
     td_delete_value.type='button';
     td_delete_value.value='delete';
     td_delete_value.addEventListener("click",function(){
      tr_.remove();
     
     })
    // هنا بقوله هتملا الي كريتناه منين
     td_Id.textContent=count;
     td_name.textContent=Name_.value;
     td_age.textContent=Age_.value;
     td_city.textContent=City_.value;
    //  هنا بقى بقوله بقى الي مكريتناه هيتحط فين
     td_edit.appendChild(td_edit_value);
     td_delete.appendChild(td_delete_value)
     tr_.append(td_Id,td_name,td_age,td_city,td_edit,td_delete);
     Table_.appendChild(tr_)
     Name_.value="";
      Age_.value="";
      City_.value="";
}else{
      currentRow.children[1].textContent = Name_.value;
      currentRow.children[2].textContent = Age_.value;
      currentRow.children[3].textContent = City_.value;
      buttun.value="Add";
      buttun.style.backgroundColor="white"
      currentrow=null;
      Name_.value="";
      Age_.value="";
      City_.value="";
}
}
}
    
