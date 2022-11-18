/* funcion de captura de datos*/
function datos(){
    var name=$("#name").val();
    if(name==""){
        alert("El campo es obligatorio");
    }
    alert("El nombre ingresado es:  " + name);

    var first=$("#lastname").val();
    if(first==""){
        alert("El campo es obligatorio");
    }
    alert("El apellido ingresado es:  " + first);

    var email=$("#email").val();
    if(email==""){
        alert("El campo es obligatorio");
    }
    alert("El correo ingresado es:  " + email);

    let select = $('input[name=radioName]:checked').val();
    alert("El género seleccionado es: "+ select);

    var date=$("#date").val();
    if(date==""){
        alert("El campo es obligatorio");
    }
    alert("La fecha de nacimiento es:  " + date);
    
}

