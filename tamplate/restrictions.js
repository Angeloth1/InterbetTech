function lettersNsp(input){
    var regex = /[^a-z a-z]/gi;
    input.value = input.value.replace(regex, "");
}

function lettersOnly(input){
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");

}

function Email(input){
    var regex = /\w{65}/g;
    input.value = input.value.replace(regex, "");
}

function phone(input){
    var regex = /[0-9]{11}/g;
    input.value = input.value.replace(regex, "");
}
function afm(input){
    var regex = /[0-9]{10}/g;
    input.value = input.value.replace(regex, "");
}
function amka(input){
    var regex = /[0-9]{12}/g;
    input.value = input.value.replace(regex, "");
}
function ccn(input){
    var regex = /[0-9]{17}/g;
    input.value = input.value.replace(regex, "");
}

function exp(){
    var todayDate = new Date();
    var month = todayDate.getMonth(); 
    var year = todayDate.getUTCFullYear() - 0; 
    var tdate = todayDate.getDate(); 
    if(month < 10){
      month = "0" + month 
    }
    if(tdate < 10){
      tdate = "0" + tdate;
    }
    var maxDate = year + "-" + month + "-" + tdate;
    document.getElementById("demo").setAttribute("min", maxDate);
    console.log(maxDate);
}

function age(input){
    var c = input.value - 18;
    if (c < 0){
        input.value = alert("sorry mate you have to be an adult");
        input.value = input.value.replace("0");
    }
}
function adr(input){
    var regex = /[^ \w\d]/gi;
    input.value = input.value.replace(regex, "");
}
