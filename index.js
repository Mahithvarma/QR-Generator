

const textInput = document.getElementById("textInput");
const qrdiv = document.getElementById("qrdiv");
const qr = document.getElementById("qr");
const inputForm = document.getElementById("inputForm");


const generateQR = async () => {
    const uri = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInput.value}`
    const response = await fetch(uri);

    if(!response.ok){
        alert("Something went wrong");
    }

    const image = await response.blob();
    const imageURL = URL.createObjectURL(image);

    qr.src = imageURL;
    qrdiv.style.display = "block";
}

const handleSubmit = async (e) => {
    e.preventDefault();

    await generateQR();
}



// textInput.addEventListener("input", generateQR);

inputForm.onsubmit = handleSubmit;