function formatText(command) {
    if (command === 'H1') {
        document.execCommand('formatBlock', false, '<h1>');
    } if (command === 'H2') {
        document.execCommand('formatBlock', false, '<h2>');
    } if (command === 'H3') {
        document.execCommand('formatBlock', false, '<h3>');
    } if (command === 'H4') {
        document.execCommand('formatBlock', false, '<h4>');
    } if (command === 'H5') {
        document.execCommand('formatBlock', false, '<h5>');
    } else {
        document.execCommand(command, false, null);
    }
// save function to save the content of the editor into the same directory as xml file
function save() {
    var editor = document.getElementById('editor');
    var text = editor.innerHTML;
    var title = document.getElementById('title').value;
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    save(blob, title + ".xml");
}
}
