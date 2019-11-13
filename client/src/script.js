// https://stackoverflow.com/questions/36267560/how-to-make-scrollbar-start-from-bottom
// from JordanHendrix

function updateScroll() {
    let element = document.getElementById("messages");
    let elementHeight = element.scrollHeight;
    element.scrollTop = elementHeight
    console.log(elementHeight)
}
window.onload = updateScroll;