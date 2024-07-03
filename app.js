async function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://http://192.168.1.49:5000/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('uploadResult').innerText = result.message;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('uploadResult').innerText = `Error uploading file: ${error.message}`;
    }
}
