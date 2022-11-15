var content = document.getElementsByTagName("body")[0];
    var darkMode = document.getElementById("dark-change");
    darkMode.addEventListener('click', function(){
        darkMode.classList.toggle('active');//allazi to laybel stin css etsi wste na litiourgisei to ekastote mode
        content.classList.toggle('night');
    })
    