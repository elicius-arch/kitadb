let enableDateInput = (bool) => {
    if (bool) {
      document.getElementById("date_input").removeAttribute("readonly");
    } else {
      document.getElementById("date_input").setAttribute("readonly", true);
    }
  }

  $(document).ready(function () {
    var date_input = $('input[name="date"]');
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
      format: 'dd.mm.yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    })
  })

  let select = () => {
    let kitaSelect = document.getElementById("kita");
    let kita = kitaSelect.options[kitaSelect.selectedIndex].value;
    let date;
    if (document.getElementById("actual_date").checked) {
      let d = new Date();
      let day = String(d.getDate()).padStart(2, '0');
      let month = String(d.getMonth() + 1).padStart(2, '0');
      let year = d.getFullYear();
      date = day + "." + month + "." + year;
    } else {
      date = document.getElementById("date_input").value;
      if (date === "") {
        //showErrorDialog("Geben Sie ein Datum ein!");
        return;
      }
    }
    console.log("KITA: " + kita);
    console.log("DATUM: " + date);
    /*let req = '{' + 
      'kita: ' + kita + ',' +
      'date: ' + date + '}';*/
    let req = {
      kita: kita,
      date: date
    }
    execPostRequestWithPath(req, 'search_kita/get', (data) => {
      console.log(data);
    });
  }
