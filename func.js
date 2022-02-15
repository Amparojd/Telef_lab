

function popupEncuesta() {
    window.confirm("Su valoración ha sido de " +document.getElementById("valor").value);
    }
function popupCuenta() {
    window.alert("Su número de cuenta es " +document.getElementById("pais").value+document.getElementById("IBAN").value+document.getElementById("entidad").value+document.getElementById("sucursal").value+document.getElementById("DC").value+document.getElementById("cuenta").value);
}

function popupDiaS(){
    const d_semana=["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];
    var fecha=document.getElementById("fecha").value;
    var dia=d_semana[new Date(fecha).getDay()];
    console.log(dia);
    alert("El día de la semana es  " +dia);
}
const provincias = new Map ([
    ["01","ALAVA"],
    ["02","ALBACETE"],
    ["03","ALICANTE"],
    ["04","ALMERIA"],
    ["05","AVILA"],
    ["06","BADAJOZ"],
    ["07","ISLAS BALEARES"],
    ["08","BARCELONA"],
    ["09","BURGOS"],
    ["10","CACERES"],
    ["11","CADIZ"],
    ["12","CASTELLON"],
    ["13","CIUDAD REAL"],
    ["14","CORDOBA"],
    ["15","LA CORUÑA"],
    ["16","CUENCA"],
    ["17","GERONA"],
    ["18","GRANADA"],
    ["19","GUADALAJARA"],
    ["20","GUIPUZCOA"],
    ["21","HUELVA"],
    ["22","HUESCA"],
    ["23","JAEN"],
    ["24","LEON"],
    ["25","LERIDA"],
    ["26","LA RIOJA"],
    ["27","LUGO"],
    ["28","MADRID"],
    ["29","MALAGA"],
    ["30","MURCIA"],
    ["31","NAVARRA"],
    ["32","ORENSE"],
    ["33","ASTURIAS"],
    ["34","PALENCIA"],
    ["35","LAS PALMAS"],
    ["36","PONTEVEDRA"],
    ["37","SALAMANCA"],
    ["38","SANTA CRUZ DE TENERIFE"],
    ["39","CANTABRIA"],
    ["40","SEGOVIA"],
    ["41","SEVILLA"],
    ["42","SORIA"],
    ["43","TARRAGONA"],
    ["44","TERUEL"],
    ["45","TOLEDO"],
    ["46","VALENCIA"],
    ["47","VALLADOLID"],
    ["48","VIZCAYA"],
    ["49","ZAMORA"],
    ["50","ZARAGOZA"],
    ["51","CEUTA"],
    ["52","MELILLA"]
]);

function isEmpty(str) {
    return (!str || str.length === 0 );
}

function isProvincia(val) {
    return Array.from(provincias.values()).includes(val.toUpperCase());
}

function verificaCP() {
    var patternN= new RegExp("^[0-5][1-9]{3}[0-9]$");
    var patternP= new RegExp("^[a-zA-Z]+$");
    var cp= document.getElementById("cp").value;
    if (isEmpty(cp)) {
        alert("El código postal debe estar formado por 5 números");
        return;
    }
    if (!patternN.test(cp)) {
        alert("Por favor, escriba 5 números en el Código Postal");
        return;
    }
    var codpos= cp.substr(0,2); 
    var prov= document.getElementById("provin").value;
    if (isEmpty(prov)) {
        alert("Por favor, introduzca una localidad válida");
        return;
    }
    if (!patternP.test(prov)) {
        alert("Por favor, escriba solo letras en el campo Localidad");
        return;
    }
    if (!isProvincia(prov)) {
        alert("En el campo localidad escriba la provincia perteneciente a su localidad");
    }
    var texto_cp= document.getElementById("mensaje_cp");
    var texto_prov= document.getElementById("mensaje_prov");
    if (provincias.has(codpos)) {
        console.log("Este código postal pertenece a "+provincias.get(codpos));
        texto_cp.textContent="El código postal es correcto";
        texto_cp.style.color= "green";
        texto_cp.style.display= "inline";
        if (provincias.get(codpos)== prov.toUpperCase()){
            console.log("La localidad es correcta");
            texto_prov.textContent="La localidad es correcta";
            texto_prov.style.color= "green";
            texto_prov.style.display= "inline";
        }else {
           console.log("La localidad es incorrecta");
           texto_prov.textContent="La localidad es incorrecta, el cp introducido " +cp+" pertenece a " +provincias.get(codpos);
            texto_prov.style.color= "red";
            texto_prov.style.display= "inline";
        }
    }else {
        console.log("El código postal es incorrecto");
        texto_cp.textContent="El código postal es incorrecto";
        texto_cp.style.color= "red";
        texto_cp.style.display= "inline";
    }
}

 function actualizar(){
    location.reload(true);}
