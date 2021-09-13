var changeToEng = document.getElementById('changeToEng');
var changeToFin = document.getElementById('changeToFin');
var changeToEst = document.getElementById('changeToEst');


changeToEng.addEventListener("click", () => {
    document.getElementById("title").innerHTML = "About me";
    document.getElementById("about-content").innerHTML = "Hi, I'm Henry. <br> I am 18 years old and I am a datanom, specialized in web development. I studied at SLK (now known as Business College Helsinki) from 2019 to 2021. <br> Also, I studied at Haaga-Helia University of Applied Sciences as a bachelor of computer science in 2021.  <br> My main skills are HTML, CSS and JavaScript, below you can find my portfolio.<br> I have previous work experience at Power Tammisto where I installed computers for customers. <br> As an employee I am punctual, do my duties enthusiastically on my own initiative and I am always looking for an opportunity to learn more and do better. <br><br><i class='fas fa-long-arrow-alt-down'></i> More about my skills <i class='fas fa-long-arrow-alt-down'></i><br><br> <a href='./Henry_Müil-cv-english.pdf' download class='downloadButton'><i class='fas fa-download'></i> Download my CV</a>";

    changeToEng.classList.add("activeLang");

    changeToFin.classList.remove("activeLang");
    changeToEst.classList.remove("activeLang");

});
changeToFin.addEventListener("click", () => {
    document.getElementById("title").innerHTML = "Minusta";
    document.getElementById("about-content").innerHTML = "Hei, olen Henry. <br> Ammatiltani datanomi, erikoistunut web-kehittäjäksi ja ikää on 18-vuotta. Opiskelin SLK:ssa vuosina 2019 - 2021, nykyään tunnetaan nimellä Business College Helsinki. <br> Lisäksi olen opiskellut Haaga-Helia AMK-väyläopinnoissa tietojenkäsittelyn tradenomiksi vuonna 2021. <br> Työkokemusta löytyy Power Tammistosta, jossa asensin koneita asiakkaille. <br> Tärkeimmät osaamiseni ovat HTML, CSS ja JavaScript, joista alapuolella on myös portfolio. <br> Työntekijänä olen tarkka, kekseliäs ja aina paikalla oikeaan aikaan.Teen tehtäviä innokkaasti ja omaaloiteellisesti. <br><br><i class='fas fa-long-arrow-alt-down'></i> Lisää osaamisestani <i class='fas fa-long-arrow-alt-down'></i><br><br> <a href='./Henry_Müil-cv-suomi.pdf' download class='downloadButton'><i class='fas fa-download'></i> Lataa CV:ni</a>";

    changeToFin.classList.add("activeLang");

    changeToEng.classList.remove("activeLang");
    changeToEst.classList.remove("activeLang");


});
changeToEst.addEventListener("click", () => {
    document.getElementById("title").innerHTML = "Minust";
    document.getElementById("about-content").innerHTML = "Tere, mina olen Henry. <br> Haridus IT-alane, spetsialiseerunud veebiarendusele ja olen 18 -aastane. Õppisin SLK-s aastatel 2019–2021, praegu tuntud kui Business College Helsinki. <br>Lisaks õppisin aastal 2021 Haaga-Helia kõrgkoolis arvutiteadust bakalaureusekraadina. <br>Töökogemust on Power Tammistos, kus paigaldasin ja valmistasin ette klientidele arvuteid. <br>Minu tähtsaimad oskused on HTML, CSS ja JavaScript valdkondades.<br> Allpool portfoolios koolides tehtud tööd. <br>Töötajana olen täpne, innovattiivne ja alati õigel ajal kohal. Täidan oma kohustusi entusiastlikult ja omal algatusel. <br><br><i class = 'fas fa-long-arrow-alt-down'> </i> Lisateave minu oskuste kohta <i class = 'fas fa-long-arrow-alt-down'> </i><br><br> <a href='./Henry_Müil-cv-eesti.pdf' download class='downloadButton'><i class='fas fa-download'></i> Laadi alla minu CV</a>";

    changeToEst.classList.add("activeLang");

    changeToEng.classList.remove("activeLang");
    changeToFin.classList.remove("activeLang");

});