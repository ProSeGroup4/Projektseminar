function sichern() {

    //später noch checkbox
    storage.set("InputOrderID", document.forms.formular.elements.InputOrderID.value);
    storage.set("InputClient", document.forms.formular.elements.InputClient.value);
    storage.set("InputItemNumber", document.forms.formular.elements.InputItemNumber.value);
    storage.set("InputAmount", document.forms.formular.elements.InputAmount.value);
    storage.set("InputColour", document.forms.formular.elements.InputColour.value);
    storage.set("InputTime", document.forms.formular.elements.InputTime.value);
    
    

    location.href = "index.html"; //von hier aus funktion aufrufen?
}