function sichern() {

    //später noch checkbox
    storage.set("InputOrderID", document.forms.formular.elements.InputOrderID.value);
    storage.set("InputClient", document.forms.formular.elements.InputClient.value);
    storage.set("InputItemNumber", document.forms.formular.elements.InputItemNumber.value);
    storage.set("InputAmount", document.forms.formular.elements.InputAmount.value);
    storage.set("InputColour", document.forms.formular.elements.InputColour.value);
    storage.set("InputTime", document.forms.formular.elements.InputTime.value);
    
    let tableRef = document.getElementsByClassName("table table-sortable")[0];

    // Füge am Ende der Tabelle eine neue Zeile an
    let newRow = tableRef.insertRow(-1);


    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);


    var liste = storage.getAll();
    var cells = new Array();
    var i = 0;
    for (var eigenschaft in liste) {
        cells[i] = liste[eigenschaft];
        i++;
    }
    
    // checkbox als Objekt erstellen
    var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "foo";
        checkbox.id = cells[0];
        checkbox.onclick = auswahl(); // funktioniert nicht

    
    cell0.appendChild(checkbox);
    cell1.appendChild(document.createTextNode(cells[0]));
    cell2.appendChild(document.createTextNode(cells[1]));
    cell3.appendChild(document.createTextNode(cells[2]));
    cell4.appendChild(document.createTextNode(cells[3]));
    cell5.appendChild(document.createTextNode(cells[4]));
    cell6.appendChild(document.createTextNode(cells[5]));


}