{

    /*
    var cvObj;
    function getData(){
        let c="";
        // fetch('./CV-MarcelaHerrera-SoftwareDeveloper.json')
        fetch("https://ma-herrera.github.io/CurriculumVitae/CV-MarcelaHerrera-SoftwareDeveloper.json")
            .then (res => res.json())
            .then(datos=>{
                c=(JSON.parse(datos));
            })
        return(c);
    }

    cvObj = getData();
*/
 
// Recuperar archivo JSON que contiene la info del CV
    const requestURL = 'https://ma-herrera.github.io/CurriculumVitae/CV-MarcelaHerrera-SoftwareDeveloper.json';
    const request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const cvObj = request.response;
        populateExperience(cvObj);
        populateEducation(cvObj);
        }



}

function populateExperience (cvObj)
{
    //recupero el nodo experience-list para agregarle tantos items como surjan del objeto JSON
    const nodo=document.getElementById ("experience-list");
    let aux_text="";
    var item;
    (cvObj["experience"]).forEach(function(objItem)
    {
        item = document.createElement("li");
        aux_text = '<h3 id="expEmpresa">' + objItem["expEmpresa"] + '</h3><h4 id="expDetail">' + objItem["expCargo"] + ', ' + objItem["expFechas"]  + ', ' ;
        aux_text += objItem["expUbicacion"] + '</h4>';
        aux_text += '<p id="expDescripcion" class="work-description">' + objItem["expDescripcion"] + '</p>';
        if (objItem["expTareasPrincipales"] != "")
            aux_text += '<p id="expTareasPrincipales">Tareas principales: ' + objItem["expTareasPrincipales"] + '</p>';
        if (objItem["expLenguajes"] != "")
            aux_text += '<p id="expLenguajes" class="work-tools"> Herramientas y lenguajes: ' + objItem["expLenguajes"] +'</p>';
        //crear un item y ponerlo como hijo de experience-list

        item.innerHTML =aux_text;
        nodo.appendChild(item);
    });

}

function populateEducation (cvObj)
{
    //recupero el nodo education-list para agregarle tantos items como surjan del objeto JSON
    const nodo = document.getElementById ("education-list");
    let aux_text="";
    var item;
    console.log(cvObj);
    (cvObj["education"]).forEach(function(objItem)
    {
        item = document.createElement("li");

        aux_text = '<h3 id="educationSchool">' + objItem["educationSchool"] + '</h3><h4 id="educationDegree">' + objItem["educationDegree"] + ' - ' + objItem["educationDates"] ;
        aux_text += '</h4>';

        console.log(aux_text);
        // aux_text += '<p id="expDescripcion" class="work-description">' + objItem["expDescripcion"] + '</p>';

        //crear un item y ponerlo como hijo de experience-list

        item.innerHTML = aux_text;
        nodo.appendChild(item);
    });
}
