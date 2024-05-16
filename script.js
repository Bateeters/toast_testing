const icon = document.querySelector("i");
const classes = icon.classList;
let toast = document.getElementById("snackbar");

// Event Listener to change icon image and trigger Toast Function on click
icon.addEventListener("click", () => {
    icon.classList.toggle("icon_btn2");
    toastDisplay();
});

// Function for Toast Text Change, Pop-up and Time out
function toastDisplay(){
    if(icon.classList.contains("icon_btn2")){
        toast.innerText = "Yay! You like something!"
        icon.innerText="Unlike Icon";
    } else {
        toast.innerText = "Boooo! Change your mind?"
        icon.innerText="Like Icon";
    }
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
};