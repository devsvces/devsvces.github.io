
  function filtrar() {
    // Declarar variables

    table = document.getElementById("tabla");

    google.script.run.withSuccessHandler(data=>{
    
      //Condicionales para filtrar
      var showData = []

      var table = "";
      var head = "";
      //Condiciones control para campos vacios
      var condequipo = '1 == 1'
      var condcis = '1 == 1'
      var condnombre = '1 == 1'
      var condcargo = '1 == 1'
      var condresp = '1 == 1'
      
      
      //Condiciones donde se validan si los campos están vacios, además guarda una condiciíon específica para buscar por cada tipo de campo
      if(document.getElementById("equipo").value !== "" && document.getElementById("equipo").value !== "Selecciona"){ //Equipo

        condequipo = 'data[i][1].toUpperCase().includes(document.getElementById("equipo").value.toUpperCase()) && document.getElementById("equipo").value !== ""'


      }

      if(document.getElementById("cis").value !== ""){ //Cis

        condcis = 'data[i][3].toUpperCase().includes(document.getElementById("cis").value.toUpperCase()) && document.getElementById("cis").value !== ""'
      }


      if(document.getElementById("usuario").value !== ""){ //Usuario

        condnombre = 'data[i][4].toUpperCase().includes(document.getElementById("usuario").value.toUpperCase()) && document.getElementById("usuario").value !== ""'

      }

      if(document.getElementById("cargo").value !== ""){ //Cargo
        condcargo = 'data[i][5].toUpperCase().includes(document.getElementById("cargo").value.toUpperCase()) && document.getElementById("cargo").value !== ""'

      }

      if(document.getElementById("responsable").value !== ""){ //Responsable

        condresp = 'data[i][6].toUpperCase().includes(document.getElementById("responsable").value.toUpperCase()) && document.getElementById("responsable").value !== ""'

      }

      
      for(var i=1; i<data.length; i++){

        if(eval(condequipo) && eval(condcis) && eval(condnombre) && eval(condcargo) && eval(condresp)){
            if(data[i][0] == "Activo"){
                showData.push(data[i])
            }
        }
      }

      //Encabezados
      head += "<div class='lvl2'><tr class='cabeza w-100'>";
            head += "<td>" + data[0][1] +"</td>"
            + "<td>" + data[0][2] +"</td>"
            + "<td>" + data[0][3] +"</td>"
            + "<td>" + data[0][4] +"</td>"
            + "<td>" + data[0][5] +"</td>"
            + "<td>" + data[0][6] +"</td>"
            head += "</tr>";
    
        if(showData.length == 0){
            table += "<h5 class='nulo m-3'>Datos no encontrados</h5>"
            }
        else{
            for(var i=0; i<showData.length; i++){

            
                
                table +="<tr class='cuerpo'>" ; 
                table += "<td>" + showData[i][1] +"</td>"
                + "<td>" + showData[i][2] +"</td>"
                + "<td>" + showData[i][3] +"</td>"
                + "<td>" + showData[i][4] +"</td>"
                + "<td>" + showData[i][5] +"</td>"
                + "<td>" + showData[i][6] +"</td>"
                table += "</tr>";
            }
        
        }

      console.log(showData)
      document.getElementById("result").innerHTML = head + table ;
      

    }).obtenerDotacion()


  }