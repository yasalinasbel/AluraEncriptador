

    function encriptar(){
        var textoaencriptar=document.getElementById("texto").value;
        document.getElementById("muneco").style.display = "none";
        document.querySelector(".rectangulomediano").style.display = "none";

        var textoencriptado=textoaencriptar.replaceAll('e','enter');
        var textoencriptado=textoencriptado.replaceAll('i','imes');
        var textoencriptado=textoencriptado.replaceAll('a','ai');
        var textoencriptado=textoencriptado.replaceAll('o','ober');
        var textoencriptado=textoencriptado.replaceAll('u','ufat');
        document.getElementById("cuadrotextoencriptado").innerHTML=textoencriptado;

        document.getElementById("texto").value="";
        document.getElementById("texto").focus();

    }
    
    function copiar(){
        var textoencriptadoacopiar=document.getElementById("cuadrotextoencriptado").innerHTML;
        document.getElementById("texto").style.display = "none";
        document.getElementById("textoadesencriptar").style.display="inline-block";
        document.getElementById("textoadesencriptar").innerHTML=textoencriptadoacopiar;
    }
    
    function desencriptar(){

        var textoparadesencriptar=document.getElementById("textoadesencriptar").innerHTML;
      
        var textodesencriptado=textoparadesencriptar.replaceAll('enter','e');
        var textodesencriptado=textodesencriptado.replaceAll('imes','i');
        var textodesencriptado=textodesencriptado.replaceAll('ai','a');
        var textodesencriptado=textodesencriptado.replaceAll('ober','o');
        var textodesencriptado=textodesencriptado.replaceAll('ufat','u');


        document.getElementById("cuadrotextoencriptado").innerHTML=textodesencriptado;
        document.getElementById("textoadesencriptar").innerHTML="";
        document.getElementById("textoadesencriptar").style.display="none";
        document.getElementById("texto").style.display ="inline-block";
       
        document.getElementById("texto").focus();
    }


    /*            <div class="responsive-cuadroencr">
                <div>
                    <ul>
                        <li>
                            <p class="responsive-encriptado">Ningún mensaje fue encontrado</p>
                        </li>
                    </ul>
                </div>

                <div class="responsive-botoncopiar">
                    <ul>
                        <li>
                            <p>Ingresa el texto que desees encriptar o desencriptar</p>
                        </li>
                    </ul>
                </div>
            </div>*/