{
    var cvObj;
    function getData(){
        let c="";
        fetch('./CV-MarcelaHerrera-SoftwareDeveloper.json')
            .then (res => res.json())
            .then(datos=>{
                c=(JSON.parse(datos));
            })
        return(c);
    }

    cvObj = getData();

    /*

    */
    // let item = ""
    //recupero el nodo experiene-item
    var nodo=document.getElementById ("experience-list");
    let body=document.getElementById("body");

    var item;
    var item_text="";
    cvObj.experience.forEach(function(item)
    {
        item = document.createElement("li");;
        item_text = '<h3 id="expEmpresa">' + cvObj.expEmpresa + '</h3><h4 id="expDetail">' + cvObj.expDetail + '</h4>' +
        '<p id="expDescripcion" class="work-description">' + cvObj.expDescription + '</p>' +
        '<p id="expTareasPrincipales">' + cvObj.expTareasEspeciales + + '</p>' +
        '<p id="expLenguajes" class="work-tools">' + cvObj.expLenguajes +'</p>';
        //crear un item y ponerlo como hijo de experience-list

        item.innerText(item_text);
        nodo.appendChild(item);
    });
}
