var task = "";
var idNumber = 1;

$("#task").keydown(function(e){
  // console.log(e.key);
  if(e.key!='Backspace' && e.key!='CapsLock'){
    task += e.key;
  }
  else if(e.key==='Backspace'){
    task = task.slice(0,task.length-1);
  }
})

function add(){

  if(task.length!=0){
    var taskCode = `<p id="${idNumber}">${task} <i class="fa fa-trash icon" onclick="deleteTask('${idNumber}')"></i></p>`

    $('#main-div').append(taskCode);

    task = "";
    idNumber++;

    $("#task").ready(function() {
      $('input[type=text]').each(function() {
          $(this).val('');
      });
    });
  }
}

function deleteTask(taskValue){
  $('#'+taskValue).remove();
}
