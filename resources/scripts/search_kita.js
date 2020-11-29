let enableDateInput = (bool) => {
    if (bool) {
      document.getElementById("date_input").removeAttribute("readonly");
    } else {
      document.getElementById("date_input").setAttribute("readonly", true);
    }
  }

  let select = () => {
    let kitaSelect = document.getElementById("kita");
    let kita = kitaSelect.options[kitaSelect.selectedIndex].value;
    let date;
    if (document.getElementById("actual_date").checked) {
      let d = new Date();
      let day = String(d.getDate()).padStart(2, '0');
      let month = String(d.getMonth() + 1).padStart(2, '0');
      let year = d.getFullYear();
      //date = day + "." + month + "." + year;
      //date = `#${month}/${day}/${year}#`;
      date = year * 10000 + parseInt(month) * 100 + parseInt(day);
    } else {
      //date = document.getElementById("date_input").value;
      date = $('#date_input').val();
      console.log(date);
      if (date === "") {
        alert('Geben Sie ein Datum ein');
        return;
      } else {
        let ymd = date.split('-');
        //date = `#${ymd[1]}/${ymd[2]}/${ymd[0]}#`;
        //date += 'T23:00:00Z';
        let y = parseInt(ymd[0]);
        let m = parseInt(ymd[1]);
        let d = parseInt(ymd[2]);
        date = y * 10000 + m * 100 + d;
      }
    }
    console.log("KITA: " + kita);
    console.log("DATUM: " + date);
    let req = {
      kita: kita,
      date: date
    };
    $('#stelle-table-body').empty();
    execPostRequestWithPath(req, 'search_kita/get', (stellen) => {
      console.log(stellen);
      stellen.forEach(stelle => {
        $('#stelle-table-body').append(`<tr id="stelle_${stelle.ID}"></tr>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${stelle.ID}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${stelle.Nachname}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${stelle.Vorname}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${getFormatedDateFromDbDate(stelle.Beginn)}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${getFormatedDateFromDbDate(stelle.Ende)}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${stelle['wöchentliche Arbeitszeit']}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${formatDouble(stelle.Stellenanteil)}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${stelle.Vergütungsgruppe}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${stelle.Funktion}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${maybeNull(stelle.Leitungsfreistellung)}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${maybeNull(stelle['tbl_Stammdaten.Bemerkung'])}</td>`);
        $(`#stelle_${stelle.ID}`).append(`<td>${maybeNull(stelle['Stelle gekoppelt an'])}</td>`);
      });
    });
  }
