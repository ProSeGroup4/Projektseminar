function auswahl() {
    var Text="";
    / jede Checkbox überprüfen und wenn ausgewaehlt dann auflisten : /
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        if(checkboxes[i].checked) {
            Text=Text+checkboxes[i].id+"\n";
        }
    }
    / Text im Ausgabefeld setzen : */
    document.getElementById("ausgewählteAufträge").innerHTML = Text;
}