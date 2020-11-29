let saveFields = () => {
    let stellenId = $('#stellen_ID').val();
    let personalId = $('#personal_ID').val();
    let nachname = $('#nachname').val();
    let vorname = $('#vorname').val();
    let beginn = $('#beginn').val();
    let ende = $('#ende').val();
    let einstellungsdatum = $('#einstellungsdatum').val();
    let verguetungsgruppe = $('#verguetungsgruppe').val();
    let kita = $('#kita').val();
    let woechentlicheArbeitszeit = $('#woechentlicheArbeitszeit').val();
    let stellenAnteil = $('#stellenanteil').val();
    let leitungsfreistellung = $('#leitungsfreistellung').val();
    let stelleGekoppeltAn = $('#stelleGekoppeltAn').val();
    let bemerkung = $('#bemerkung').val();

    let json = `{
        stellenId: ${stellenId},
        personalId: ${personalId},
        nachname: ${nachname},
        vorname: ${vorname},
        beginn: ${beginn},
        ende: ${ende},
        einstellungsdatum: ${einstellungsdatum},
        verguetungsgruppe: ${verguetungsgruppe},
        kita: ${kita},
        woechentlicheArbeitszeit: ${woechentlicheArbeitszeit},
        stellenAnteil: ${stellenAnteil},
        leitungsfreistellung: ${leitungsfreistellung},
        stelleGekoppeltAn: ${stelleGekoppeltAn},
        bemerkung: ${bemerkung}
    }`

    execPostRequestWithPath(json, "stelle/save", (result) => {
        console.log(result);
    })
}

let bearbeiten = () => {
    let data = $('.data');
    for (let d of data) {
        d.removeAttribute("disabled");
    }
    $('#save').prop("disabled", false);
    $('#stellen_ID').prop('disabled', true);
    $('#nachname').prop('disabled', true);
    $('#vorname').prop('disabled', true);
}

let searchNachnamen = () => {
    execGetRequestWithPath("stammdaten/get/nachnamen", (data) => {
        console.log(data);
    })
}