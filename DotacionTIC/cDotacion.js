
    var table = ""
    var head = ""
    var datosTabla = [];
    alert(localStorage.getItem("nombre"))
    const config = {
      search: true, // Toggle search feature. Default: false 
      maxHeight: '300px', // Max height for showing scrollbar. Default: 360px
      size: '', // Can be "sm" or "lg". Default ''
    }

    var selects = document.getElementsByTagName('select')

    for(i=0; i<selects.length; i++){
        dselect(selects[i], config)
    }
        

    window.addEventListener('DOMContentLoaded', (event) => {
        Swal.fire({
            title: 'Cargando datos..',
            timer: 2500,
            icon: 'info',
            timerProgressBar: true,
            showConfirmButton: false,
        })

        cargarDatos()

    })

    function cargarDatos(){
        document.getElementById("result").innerHTML = "";
        head = ""
        table = ""
        google.script.run.withSuccessHandler(data=>{
        
            console.log(data)

            //Encabezados
            head += "<div class='lvl2'><tr class='cabeza w-100'>";
            head += "<td>" + data[0][1] +"</td>"
            + "<td>" + data[0][2] +"</td>"
            + "<td>" + data[0][3] +"</td>"
            + "<td>" + data[0][4] +"</td>"
            + "<td>" + data[0][5] +"</td>"
            + "<td>" + data[0][6] +"</td>"
            head += "</tr>";

            for(var i = 1; i< data.length; i++){ 

                if(data[i][0] == "Activo"){
                    table +="<tr class='cuerpo'>" ; 
                    table += "<td>" + data[i][1] +"</td>"
                    + "<td>" + data[i][2] +"</td>"
                    + "<td>" + data[i][3] +"</td>"
                    + "<td>" + data[i][4] +"</td>"
                    + "<td>" + data[i][5] +"</td>"
                    + "<td>" + data[i][6] +"</td>"
                    table += "</tr>";
                }
                
            }

            document.getElementById("result").innerHTML = head + table + "</div>";
            document.getElementById("carga").hidden = "true";


            console.log(data)
        }
        ).obtenerDotacion()
    }
