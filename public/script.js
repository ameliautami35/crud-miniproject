document.addEventListener("DOMContentLoaded", function () {
    loadUserData();

    document.querySelector(".btn-primary").addEventListener("click", function () {
        saveUserData();
    });
});

function saveUserData() {
    let username = document.querySelector("input[placeholder='Username']").value;
    let name = document.querySelector("input[placeholder='Name']").value;
    let email = document.querySelector("input[placeholder='E-mail']").value;
    let company = document.querySelector("input[placeholder='Company']").value;

    if (!username || !name || !email || !company) {
        alert("Harap isi semua bidang");
        return;
    }

    let userData = {
        username: username,
        name: name,
        email: email,
        company: company
    };

    localStorage.setItem("userProfile", JSON.stringify(userData));
    alert("Data berhasil disimpan!");
}

function loadUserData() {
    let storedData = localStorage.getItem("userProfile");
    if (storedData) {
        let userData = JSON.parse(storedData);
        document.querySelector("input[placeholder='Username']").value = userData.username;
        document.querySelector("input[placeholder='Name']").value = userData.name;
        document.querySelector("input[placeholder='E-mail']").value = userData.email;
        document.querySelector("input[placeholder='Company']").value = userData.company;
    }
}
