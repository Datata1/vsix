const express = require('express');
const app = express();
const path = require('path');

//aaa
// Definiere den Pfad zur VSIX-Datei
const vsixFile = 'codesphere-0.0.1.vsix';
const vsixFilePath = path.resolve(__dirname, vsixFile);

// Stelle den Download-Endpunkt bereit
app.get('/download', (req, res) => {
    res.download(vsixFilePath, vsixFile, (err) => {
        if (err) {
            console.error('Fehler beim Herunterladen:', err);
            res.status(500).send('Interner Serverfehler');
        } else {
            console.log('Datei erfolgreich heruntergeladen');
        }
    });
});

// Starte den Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
