window.addEventListener('load', function () {
    const button_family = document.getElementById('button-family');
    const button_special = document.getElementById('button-special');
    const button_social = document.getElementById('button-social');
    const events_image = document.getElementById('events-image');
    const events_title = document.getElementById('events-title');
    const events_text = document.getElementById('events-text');

    button_family.onclick=function () {
        events_image.setAttribute('src', './images/homepage/family-gathering-desktop.jpg');
    };
    button_special.onclick=function () {
        events_image.setAttribute('src', './images/homepage/special-events-desktop.jpg');
        /*h2, p*/
    };
    button_social.onclick=function () {
        events_image.setAttribute('src', './images/homepage/social-events-desktop.jpg');
        
    };    

    /*event handler*/
});