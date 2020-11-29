let createNew = () => {
    let fields = getFormFields();
    for (let f of fields) {
        enableInput(f.id);
        f.value = '';
    }
    disableInput("personal_ID");
    disableInput("bearbeiten");
    enableInput("save");
}

let getFormFields = () => {
    return $('.data');
}

let disableInput = (id) => {
    document.getElementById(id).setAttribute("disabled", true);
}

let enableInput = (id) => {
    document.getElementById(id).removeAttribute("disabled");
}

let saveFields = () => {
    let fields = getFormFields();
    let json = `{"method" : "save",`;
    for (let f of fields) {
        json += `"${f.id}" : "${f.value}",`;
        disableInput(f.id);
    }
    disableInput("save");
    enableInput("bearbeiten");
    json = json.substring(0, json.length - 1);
    json += "}";
    console.log(json);
    execPostRequest(json, (data) => {
        console.log(data);
        
    });
}

let searchStammdaten = () => {
    let nachname = $('#searchModalNachname').val();
    let vorname = $('#searchModalVorname').val();
    let json = {};
    json.nachname = nachname;
    json.vorname = vorname;
    console.log(json);
    execPostRequestWithPath(json, "stammdaten/get/vorname", (data) => {
        console.log(data);
    });
}

let searchNachnamen = () => {
    execGetRequestWithPath("stammdaten/get/nachnamen", (data) => {
        console.log(data);
    })
}