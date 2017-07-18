function convertir(){
	var conv = parseInt(document.getElementById("farenheit").value);
    var farenheit =  ((conv*(9/5))+32) ;
    farenheit=farenheit.toFixed(2);
    document.getElementById("resultado").innerHTML= farenheit;

}

