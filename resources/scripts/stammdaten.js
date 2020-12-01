let createNew = () => {
    let fields = getFormFields();
    for (let f of fields) {
        enableInput(f.id);
        f.value = '';
    }
    disableInput("personal_ID");
    disableInput("bearbeiten");
}

let getFormFields = () => {
    return $('.data');
}

let saveFields = () => {
    let json = {};
    json.nachname = $('#nachname').val();
    json.vorname = $('#vorname').val();
    json.gebDate = formatDateForServer($('#geburtsdatum').val());
    json.unbefristet = formatDateForServer($('#unbefristet').val());
    json.einstellungsdatum = formatDateForServer($('#einstellungsdatum').val());
    json.bemerkung = $('#bemerkung').val();
    
    console.log(json);
    execPostRequestWithPath(json, "stammdaten/save", (data) => {
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