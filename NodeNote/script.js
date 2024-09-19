// Textformatierung im Editor
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

// Standardmäßig <p> statt <div> bei Enter-Taste
document.getElementById('editor').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        // Verhindere das Standardverhalten
        e.preventDefault();
        
        // Füge ein neues <p>-Tag an der aktuellen Cursor-Position ein
        document.execCommand('insertParagraph');
    }
});

// Funktion zum Ersetzen von <div> durch <p>
function replaceDivWithP(content) {
    // Ersetze alle <div> mit <p>
    return content.replace(/<div/g, '<p').replace(/<\/div>/g, '</p>');
}

// Exportfunktion für den Textinhalt als XML
function exportText() {
    // Den Inhalt des Editors abrufen
    var editorContent = document.getElementById('editor').innerHTML;

    // Ersetze <div>-Tags durch <p>-Tags
    var formattedContent = replaceDivWithP(editorContent);

    // XML-Dokument erstellen
    var xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent += '<document xml:lang="de">\n';
    xmlContent += '<content>\n';
    xmlContent += formattedContent + '\n';
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
