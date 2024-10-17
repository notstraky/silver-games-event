function scrollToParticipants() {
    document.getElementById('participants').scrollIntoView({ behavior: 'smooth' });
}

function toggleInfo(id) {
    const infoBox = document.getElementById(`info-${id}`);
    if (infoBox.style.display === "none" || infoBox.style.display === "") {
        infoBox.style.display = "block";
    } else {
        infoBox.style.display = "none";
    }
}
