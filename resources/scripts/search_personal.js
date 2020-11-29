let select = () => {
    let select = document.getElementById("personal");
    console.log(select);
    let selectedPerson = select.options[select.selectedIndex].value;
    console.log(selectedPerson);
    execPostRequest(`{"person" : "${selectedPerson}"}`, (result) => {console.log(result)});
}