function formatText(command) {
    if (command === 'H1') {
        document.execCommand('formatBlock', false, '<h1>');
    } else if (command === 'H2') {
        document.execCommand('formatBlock', false, '<h2>');
    } else if (command === 'H3') {
        document.execCommand('formatBlock', false, '<h3>');
    } else if (command === 'H4') {
        document.execCommand('formatBlock', false, '<h4>');
    } else if (command === 'H5') {
        document.execCommand('formatBlock', false, '<h5>');
    } else {
        document.execCommand(command, false, null);
    }
}

function exportText() {
    // Den Inhalt des Editors abrufen
    var editorContent = document.getElementById('editor').innerHTML;

    // XML-Dokument erstellen
    var xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent += '<document>\n';
    xmlContent += '<content>\n';
    xmlContent += editorContent + '\n';
    xmlContent += '</content>\n';
    xmlContent += '</document>';

    // Blob erstellen (repräsentiert die Datei)
    var blob = new Blob([xmlContent], { type: 'text/xml' });

    // Download-Link erstellen
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'editor-content.xml';

    // Automatisch den Download-Link klicken, um den Download zu starten
    link.click();
}
