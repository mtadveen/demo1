document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let eventName = document.getElementById("event").value;

    document.getElementById("output").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Event:</strong> ${eventName}</p>
        <p><strong>Status:</strong> Registration Successful!</p>
    `;

    document.getElementById("registrationForm").reset();
});