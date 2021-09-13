        var CssBut = document.getElementById("CssBut");
        var Css = document.getElementById("Css");

        CssBut.addEventListener("click", () => {

            if (!CssBut.classList.contains('activePortBut')) {
                Css.style.display = "block";
                An.style.display = "none";
                Js.style.display = "none";
                CssBut.classList.add("activePortBut");
                JsBut.classList.remove("activePortBut");
                AnBut.classList.remove("activePortBut");
            } else if (CssBut.classList.contains('activePortBut')) {
                Css.style.display = "none";
                CssBut.classList.remove("activePortBut");
            }

        });

        var JsBut = document.getElementById("JsBut");
        var Js = document.getElementById("Js");

        JsBut.addEventListener("click", () => {
            if (!JsBut.classList.contains('activePortBut')) {
                Js.style.display = "block";
                An.style.display = "none";
                Css.style.display = "none";
                JsBut.classList.add("activePortBut");
                AnBut.classList.remove("activePortBut");
                CssBut.classList.remove("activePortBut");
            } else if (JsBut.classList.contains('activePortBut')) {
                Js.style.display = "none";
                JsBut.classList.remove("activePortBut");
            }
        });

        var AnBut = document.getElementById("AnBut");
        var An = document.getElementById("Angular");

        AnBut.addEventListener("click", () => {
            if (!AnBut.classList.contains('activePortBut')) {
                An.style.display = "block";
                Js.style.display = "none";
                Css.style.display = "none";
                AnBut.classList.add("activePortBut");
                JsBut.classList.remove("activePortBut");
                CssBut.classList.remove("activePortBut");
            } else if (AnBut.classList.contains('activePortBut')) {
                An.style.display = "none";
                AnBut.classList.remove("activePortBut");
            }
        });

        function openGame() {
            window.open("./Games/index.html", "_self")
        }

        /*HAAGA-HELIA*/

        var compWebBut = document.getElementById("compWebBut");
        var compWeb = document.getElementById("compWeb");

        compWebBut.addEventListener("click", () => {

            if (!compWebBut.classList.contains('activePortBut')) {

                compWeb.style.display = "block";
                Blender.style.display = "none";
                Js2.style.display = "none";
                Print.style.display = "none";

                compWebBut.classList.add("activePortBut");
                JsBut2.classList.remove("activePortBut");
                blenderBut.classList.remove("activePortBut");
                printBut.classList.remove("activePortBut");

            } else if (compWebBut.classList.contains('activePortBut')) {
                compWeb.style.display = "none";
                compWebBut.classList.remove("activePortBut");
            }

        });

        var JsBut2 = document.getElementById("JsBut2");
        var Js2 = document.getElementById("Js2");

        JsBut2.addEventListener("click", () => {
            if (!JsBut2.classList.contains('activePortBut')) {

                Js2.style.display = "block";
                Blender.style.display = "none";
                compWeb.style.display = "none";
                Print.style.display = "none";

                JsBut2.classList.add("activePortBut");
                compWebBut.classList.remove("activePortBut");
                blenderBut.classList.remove("activePortBut");
                printBut.classList.remove("activePortBut");


            } else if (JsBut2.classList.contains('activePortBut')) {
                Js2.style.display = "none";
                JsBut2.classList.remove("activePortBut");
            }
        });

        var blenderBut = document.getElementById("blenderBut");
        var Blender = document.getElementById("Blender");

        blenderBut.addEventListener("click", () => {
            if (!blenderBut.classList.contains('activePortBut')) {

                Blender.style.display = "block";
                Js2.style.display = "none";
                compWeb.style.display = "none";
                Print.style.display = "none";


                blenderBut.classList.add("activePortBut");
                JsBut2.classList.remove("activePortBut");
                compWebBut.classList.remove("activePortBut");
                printBut.classList.remove("activePortBut");


            } else if (blenderBut.classList.contains('activePortBut')) {
                Blender.style.display = "none";
                blenderBut.classList.remove("activePortBut");
            }
        });

        var printBut = document.getElementById("printBut");
        var Print = document.getElementById("Print");

        printBut.addEventListener("click", () => {
            if (!printBut.classList.contains('activePortBut')) {

                Print.style.display = "block";
                Js2.style.display = "none";
                compWeb.style.display = "none";
                Blender.style.display = "none";

                printBut.classList.add("activePortBut");
                JsBut2.classList.remove("activePortBut");
                compWebBut.classList.remove("activePortBut");
                blenderBut.classList.remove("activePortBut");


            } else if (printBut.classList.contains('activePortBut')) {
                Print.style.display = "none";
                printBut.classList.remove("activePortBut");
            }
        });