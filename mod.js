document.getElementById('process-file').addEventListener('click', () => {
    const fileInput = document.getElementById('file-input');
    const comment = document.getElementById('comment').value;
    const downloadLink = document.getElementById('download-link');

    if (fileInput.files.length === 0) {
        alert("Veuillez sélectionner un fichier à modifier.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const newContent = `/* ${comment} */\n` + fileContent;
        const blob = new Blob([newContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        downloadLink.href = url;
        downloadLink.download = `modifié_${file.name}`;
        downloadLink.style.display = 'inline-block';
        downloadLink.textContent = "Télécharger le Fichier Modifié";
    };

    reader.readAsText(file);
});
