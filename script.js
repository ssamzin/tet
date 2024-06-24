// script.js
document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUrl = document.getElementById('video-url').value;
    
    fetch('/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: videoUrl })
    })
    .then(response => response.json())
    .then(data => {
        if (data.downloadUrl) {
            document.getElementById('download-link').innerHTML = `<a href="${data.downloadUrl}" download>Download Video</a>`;
        } else {
            document.getElementById('download-link').textContent = 'Error downloading video';
        }
    });
});
