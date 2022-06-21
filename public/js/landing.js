const newPlayGroupHandler = async (event) => {
    event.preventDefault();

    const newGroupName = document.querySelector("#group_name").value.trim();
    console.log(`newPlayGroup Button clicked. Launching post request, client side, with: ${newGroupName}`);

    if (newGroupName) {
        const response = await fetch('/api/playGroups/newGroup', {
            method: "POST",
            body: JSON.stringify({newGroupName}),
            headers: {"Content-Type": "application/json"},
        });

        if (response.ok) {
            document.location.replace("/playGroups");
        } else {
            const text = await response.json();
            if (text.message) {
                alert(text.message);
            } else {
                alert(response.statusText);
            }
        }
    }
};

// Add playGroup button
document.querySelector("#add_playGroup_btn").addEventListener("click", newPlayGroupHandler);

// // 'login (View Decks)' button
// document
//   .querySelector("#login-btn")
//   .addEventListener("click", loginFormHandler);

// // 'Signup' button
// document
//   .querySelector("#signup-btn")
//   .addEventListener("click", signupFormHandler);