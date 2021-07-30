const h2 = document.createElement("h2");
h2.textContent = "A brief lil site about me";
document.querySelector("body").appendChild(h2);
/*h2.style.color = "#fff";
h2.style.fontFamily = "Arial";*/

function nameClick() {
    const selfie = document.getElementById("title");

    function clickAlert() {
        alert('That\'s my name, don\'t wear it out');
    }
    
    selfie.addEventListener('click', clickAlert);
}

nameClick();
