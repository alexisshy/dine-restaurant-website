window.addEventListener('load', function () {
    const button_family=document.getElementById('button-family');
    const button_special=document.getElementById('button-special');

    const events_image=document.getElementById('events-image');

    button_family.onclick=function () {
        events_image.setAttribute('src', './images/homepage/family-gathering-desktop.jpg');
    };
    button_special.onclick=function () {
        events_image.setAttribute('src', './images/homepage/special-events-desktop.jpg');
        /*h2, p*/
    };
    /*event handler*/
});