window.addEventListener('load', function () {
    const button_family = document.getElementById('button-family');
    const button_special = document.getElementById('button-special');
    const button_social = document.getElementById('button-social');
    const events_image = document.getElementById('events-image');
    const events_title = document.getElementById('events-title');
    const events_text = document.getElementById('events-text');

    button_family.onclick=function () {
        events_image.setAttribute('src', './images/homepage/family-gathering-desktop.jpg');
        events_title.innerHTML = "Family Gathering";
        events_text.innerHTML = `We love catering for entire families. So please bring everyone along for a special meal with your 
        loved ones. We’ll provide a memorable experience for all.`;
    };
    button_special.onclick=function () {
        events_image.setAttribute('src', './images/homepage/special-events-desktop.jpg');
        events_title.innerHTML = "Special Events";
        events_text.innerHTML = `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
        We’ll be sure to mark your special date with an unforgettable meal.`;
        /*h2, p*/
    };
    button_social.onclick=function () {
        events_image.setAttribute('src', './images/homepage/social-events-desktop.jpg');
        events_title.innerHTML = "Social Events";
        events_text.innerHTML = `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
        parties. We’ll work with you to make your event a hit with everyone.`;
        
    };    
    

    /*event handler*/
});