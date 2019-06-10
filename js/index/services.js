var serviceItems = [
    {
        name: "Desarrollo de pagina web informativa",
        price: "120",
        currency: "$",
        description: "Paquete para las personas o empresas que desean una forma basica, pero elegante de presencia web. Lo cuál le permite al interesado ofrecer servicios o su imagen personal de manera actual y visible.",
        feactures: ["Incluye maquetación y creación de pagina web", "Animaciones basicas", "Montaje de la pagina web en un servidor de su preferencia"]
    },
    {
        name: "Desarrollo de aplicación web",
        price: "500",
        currency: "$",
        description: "Paquete para las empresas que desean una aplicación para automatizar sus procesos o facilitar el flujo y almacenamiento de información. Pero al mismo tiempo tener accesibilidad a los datos desde cualquier parte donde haya un navegador web, en cualquier momento. Asegurando la seguridad y el buen funcionamiento del sistema. Todo esto reflejado en una interfaz elegante e intuitiva.",
        feactures: ["Incluye maquetación y creación de pagina web","Animaciones", "Exploración y diseño de requerimientos","Procesos de creación transparentes","Prueba y garantía del sistema", "Montaje de la pagina web en un servidor de su preferencia","Aplicación en Java o PHP"]
    },
    {
        name: "Desarrollo de aplicación Android",
        price: "300",
        currency: "$",
        description: "Paquete para las empresas que desean una aplicación en Android que almacene datos o consuma un servicio web, pero posibilitando el uso de servicios en esta plataforma tan importante en el mundo movil.",
        feactures: ["Incluye maquetación y creación de aplicación movil", "Exploración y diseño de requerimientos","Procesos de creación transparentes","Prueba y garantía del sistema", "Uso de librerías externas (Según el tipo y la cantidad puede variar el costo)"]
    }
];


function clickService($id) {

    changeSelectService($id,false);
    changeValues($id);
    openCloseDescription(true);


}

function cancelService() {

    changeSelectService(-1,true);
    openCloseDescription(false);


}

function changeValues($id){

    document.getElementById("service-id").value=$id;
    document.getElementById("service-price").innerHTML = serviceItems[$id]["price"] + serviceItems[$id]["currency"];
    document.getElementById("service-description").innerHTML = serviceItems[$id]["description"];
    document.getElementById("service-feactures").innerHTML ="";
    
    var list = serviceItems[$id]["feactures"];
    for (let i = 0; i < list.length; i++) {
        document.getElementById("service-feactures").innerHTML += "<li>" + list[i] + "</li>";
    }

}

function changeSelectService($id,$unselect){
    
    for (let i = 0; i < serviceItems.length; i++) {
        document.getElementById("s-item-"+i).className="service col-md-4";
        document.getElementById("s-item-"+i).style="";
    }

    if(!$unselect){
        document.getElementById("s-item-"+$id).className="service press col-md-4";
        document.getElementById("service-message").hidden=true;
        document.getElementById("email").value="";
    }
    
}

function openCloseDescription($open){
    if($open){
        $( "#dialog-description" ).animate({
            maxHeight: $("#services").get(0).scrollHeight,
            padding: "3vw"
          }, 1000);
          $('html, body').animate({
            scrollTop: $("#dialog-description").offset().top-$("#navbar").height()
        }, 1000);
    }else{
        $( "#dialog-description" ).animate({
            maxHeight: "0px",
            padding: "0vw"
          }, 1000,function() {
            changeSelectService(-1,true);
          });
    }
}

function sendEmail(){
    var email=document.getElementById("email").value;
    var id=document.getElementById("service-id").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "miguelepinaq@gmail.com",
        Password : "2ae190d5-425a-4247-bec2-9b4002e0af6d",
        To : 'miguelepinaq@gmail.com',
        From : "miguelepinaq@gmail.com",
        Subject : "Presupuesto de "+serviceItems[id]["name"],
        Body : 
        "Necesito un presupuesto de: "+serviceItems[id]["name"]+". "+
        "Descripción: "+serviceItems[id]["description"]+ " "+
        "Para el correo: "+email
    }).then(
      message => document.getElementById("service-message").hidden=false
    );

    return false;
}