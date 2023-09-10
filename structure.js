window.onload = function() {
    alert("You have a bad conection!");
};
function updateContent() {
    const contentParagraph = document.getElementById("content");
    contentParagraph.textContent = "Content updated!";
}


document.getElementById("updateButton").addEventListener("click", updateContent);