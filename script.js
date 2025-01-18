function startTimer() {
    setTimeout(showMainContent, 5000);
}

function showMainContent() {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}
