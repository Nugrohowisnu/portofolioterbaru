const scriptURL = "https://script.google.com/macros/s/AKfycbxSY9j0pMHptZE00V8ZVggYY1L3fcZiQ5WBVWyqm67BtzypPz4B8ZES_lDMm0RdBhF2tQ/exec";
const form = document.forms["wisnu-web"];

form.addEventListener("submit", (e) => {
    const notif = document.querySelector(".notif");
    notif.classList.toggle("active");
    console.log(notif);

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            console.log("Success!", response);
            notif.classList.toggle("active");
            alert("Pesan anda sudah dikirim.");
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});