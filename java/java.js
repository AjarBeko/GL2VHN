document.getElementById("vege").addEventListener("click", pontocskak);

function pontocskak() {

    let pont = 0;
/*1. kérdés*/
    const a1 = document.getElementById("1_1").checked;
    const b1 = document.getElementById("1_2").checked;
    const c1 = document.getElementById("1_3").checked;

    if (a1 == 0 && b1 == 0 && c1 == 0) {
        document.getElementById("rossz1_1").style.color = "red";
        document.getElementById("rossz1_2").style.color = "red";
        document.getElementById("jo1").style.color = "red";
    }

    if (b1 == 1) {
        pont = pont + 1;
        document.getElementById("jo1").style.color = "green";
        document.getElementById("rossz1_1").style.color = "white";
        document.getElementById("rossz1_2").style.color = "white";
    }

    if (a1 == 1) {
        document.getElementById("jo1").style.color = "white";
        document.getElementById("rossz1_1").style.color = "red";
        document.getElementById("rossz1_2").style.color = "white";
    }
    if (c1 == 1) {
        document.getElementById("jo1").style.color = "white";
        document.getElementById("rossz1_2").style.color = "red";
        document.getElementById("rossz1_1").style.color = "white";
    }

/*2. kérdés*/

    const a2 = document.getElementById("2_1").checked;
    const b2 = document.getElementById("2_2").checked;
    const c2 = document.getElementById("2_3").checked;

    if (a2 == 0 && b2 == 0 && c2 == 0) {
        document.getElementById("rossz2_1").style.color = "red";
        document.getElementById("rossz2_2").style.color = "red";
        document.getElementById("jo2").style.color = "red";
    }

    if (a2 == 1) {
        pont = pont + 1;
        document.getElementById("jo2").style.color = "green";
        document.getElementById("rossz2_1").style.color = "white";
        document.getElementById("rossz2_2").style.color = "white";
    }

    if (b2 == 1) {
        document.getElementById("jo2").style.color = "white";
        document.getElementById("rossz2_1").style.color = "red";
        document.getElementById("rossz2_2").style.color = "white";
    }
    if (c2 == 1) {
        document.getElementById("jo2").style.color = "white";
        document.getElementById("rossz2_2").style.color = "red";
        document.getElementById("rossz2_1").style.color = "white";
    }

/*3. kérdés*/

    const a3 = document.getElementById("3_1").checked;
    const b3 = document.getElementById("3_2").checked;
    const c3 = document.getElementById("3_3").checked;

    if (a3 == 0 && b3 == 0 && c3 == 0) {
        document.getElementById("rossz3_1").style.color = "red";
        document.getElementById("rossz3_2").style.color = "red";
        document.getElementById("jo3").style.color = "red";
    }

    if (c3 == 1) {
        pont = pont + 1;
        document.getElementById("jo3").style.color = "green";
        document.getElementById("rossz3_1").style.color = "white";
        document.getElementById("rossz3_2").style.color = "white";
    }

    if (b3 == 1) {
        document.getElementById("jo3").style.color = "white";
        document.getElementById("rossz3_2").style.color = "red";
        document.getElementById("rossz3_1").style.color = "white";
    }
    if (a3 == 1) {
        document.getElementById("jo3").style.color = "white";
        document.getElementById("rossz3_1").style.color = "red";
        document.getElementById("rossz3_2").style.color = "white";
    }

/*4. kérdés*/

    const a4 = document.getElementById("4_1").checked;
    const b4 = document.getElementById("4_2").checked;
    const c4 = document.getElementById("4_3").checked;

    if (a4 == 0 && b4 == 0 && c4 == 0) {
        document.getElementById("rossz4_1").style.color = "red";
        document.getElementById("rossz4_2").style.color = "red";
        document.getElementById("jo4").style.color = "red";
    }

    if (b4 == 1) {
        pont = pont + 1;
        document.getElementById("jo4").style.color = "green";
        document.getElementById("rossz4_1").style.color = "white";
        document.getElementById("rossz4_2").style.color = "white";
    }

    if (a4 == 1) {
        document.getElementById("jo4").style.color = "white";
        document.getElementById("rossz4_1").style.color = "red";
        document.getElementById("rossz4_2").style.color = "white";
    }
    if (c4 == 1) {
        document.getElementById("jo4").style.color = "white";
        document.getElementById("rossz4_2").style.color = "red";
        document.getElementById("rossz4_1").style.color = "white";
    }

/*5. kérdés*/

    const a5 = document.getElementById("5_1").checked;
    const b5 = document.getElementById("5_2").checked;
    const c5 = document.getElementById("5_3").checked;

    if (a5 == 0 && b5 == 0 && c5 == 0) {
        document.getElementById("rossz5_1").style.color = "red";
        document.getElementById("rossz5_2").style.color = "red";
        document.getElementById("jo5").style.color = "red";
    }

    if (c5 == 1) {
        pont = pont + 1;
        document.getElementById("jo5").style.color = "green";
        document.getElementById("rossz5_1").style.color = "white";
        document.getElementById("rossz5_2").style.color = "white";
    }

    if (b5 == 1) {
        document.getElementById("jo5").style.color = "white";
        document.getElementById("rossz5_2").style.color = "red";
        document.getElementById("rossz5_1").style.color = "white";
    }
    if (a5 == 1) {

        document.getElementById("jo5").style.color = "white";
        document.getElementById("rossz5_1").style.color = "red";
        document.getElementById("rossz5_2").style.color = "white";
    }

/*6. kérdés*/

    const a6 = document.getElementById("6_1").checked;
    const b6 = document.getElementById("6_2").checked;
    const c6 = document.getElementById("6_3").checked;

    if (a6 == 0 && b6 == 0 && c6 == 0) {
        document.getElementById("rossz6_1").style.color = "red";
        document.getElementById("rossz6_2").style.color = "red";
        document.getElementById("jo6").style.color = "red";
    }

    if (a6 == 1) {
        pont = pont + 1;
        document.getElementById("jo6").style.color = "green";
        document.getElementById("rossz6_1").style.color = "white";
        document.getElementById("rossz6_2").style.color = "white";
    }

    if (b6 == 1) {
        document.getElementById("jo6").style.color = "white";
        document.getElementById("rossz6_1").style.color = "red";
        document.getElementById("rossz6_2").style.color = "white";
    }
    if (c6 == 1) {
        document.getElementById("jo6").style.color = "white";
        document.getElementById("rossz6_2").style.color = "red";
        document.getElementById("rossz6_1").style.color = "white";
    }

/*7. kérdés*/

    const a7 = document.getElementById("7_1").checked;
    const b7 = document.getElementById("7_2").checked;
    const c7 = document.getElementById("7_3").checked;

    if (a7 == 0 && b7 == 0 && c7 == 0) {
        document.getElementById("rossz7_1").style.color = "red";
        document.getElementById("rossz7_2").style.color = "red";
        document.getElementById("jo7").style.color = "red";
    }

    if (b7 == 1) {
        pont = pont + 1;
        document.getElementById("jo7").style.color = "green";
        document.getElementById("rossz7_1").style.color = "white";
        document.getElementById("rossz7_2").style.color = "white";
    }

    if (a7 == 1) {
        document.getElementById("jo7").style.color = "white";
        document.getElementById("rossz7_1").style.color = "red";
        document.getElementById("rossz7_2").style.color = "white";
    }
    if (c7 == 1) {
        document.getElementById("jo7").style.color = "white";
        document.getElementById("rossz7_2").style.color = "red";
        document.getElementById("rossz7_1").style.color = "white";
    }

/*8. kérdés*/

    const a8 = document.getElementById("8_1").checked;
    const b8 = document.getElementById("8_2").checked;
    const c8 = document.getElementById("8_3").checked;

    if (a8 == 1) {
        pont = pont + 1;

        document.getElementById("jo8").style.color = "green";
        document.getElementById("jo9").style.color = "white";
        document.getElementById("jo10").style.color = "white";
    }
    else {
        document.getElementById("jo8").style.color = "red";
        document.getElementById("jo9").style.color = "red";
        document.getElementById("jo10").style.color = "red";
    };

    if (b8 == 1) {
        pont = pont + 1;
        document.getElementById("jo9").style.color = "green";
        document.getElementById("jo8").style.color = "white";
        document.getElementById("jo10").style.color = "white";
    }

    if (c8 == 1) {
        pont = pont + 1;
        document.getElementById("jo10").style.color = "green";
        document.getElementById("jo9").style.color = "white";
        document.getElementById("jo8").style.color = "white";
    }

/*9. kérdés*/

    const a9 = document.getElementById("9_1").checked;
    const b9 = document.getElementById("9_2").checked;
    const c9 = document.getElementById("9_3").checked;

    if (a9 == 1) {
        pont = pont + 1;
        document.getElementById("jo11").style.color = "green";
        document.getElementById("jo12").style.color = "white";
        document.getElementById("jo13").style.color = "white";
    }
    else {
        document.getElementById("jo11").style.color = "red";
        document.getElementById("jo12").style.color = "red";
        document.getElementById("jo13").style.color = "red";
    };

    if (b9 == 1) {
        pont = pont + 1;

        document.getElementById("jo12").style.color = "green";


        document.getElementById("jo11").style.color = "white";

        document.getElementById("jo13").style.color = "white";
    }

    if (c9 == 1) {
        pont = pont + 1;

        document.getElementById("jo13").style.color = "green";


        document.getElementById("jo11").style.color = "white";

        document.getElementById("jo12").style.color = "white";
    }

/*végeredmény*/

    if (pont < 1) {
        document.getElementById("pontok").innerText = "A pontod: " + String(pont) + "\nNem baj, a legjobbak is hibáznak (és te is)";

    } else if (pont < 3) {
        document.getElementById("pontok").innerText = "A pontod: " + String(pont) + "\nEz nem az igazi, de egy RS 3-mast megérdemelsz";

    } else if (pont < 6) {
        document.getElementById("pontok").innerText = "A pontod: " + String(pont) + "\nNem rossz, ez már megár egy RS 5-öst";

    } else if (pont < 9) {
        document.getElementById("pontok").innerText = "A pontod: " + String(pont) + "\nSzép munka, egy RS 7-est elfogadsz cserébe?";

    } else {
        document.getElementById("pontok").innerText = "A pontod: " + String(pont) + "\nNa ez a nem semmi GG. Papitó a Csillagból is üdvözöl a Béke Szigetén. Megajándékozlak egy RS 6-os Audival ;)";
    }
}

/*újra gomb */

document.getElementById("ujra").addEventListener("click", again);

function again() {

    document.getElementById("jo1").style.color = "white";
    document.getElementById("jo2").style.color = "white";
    document.getElementById("jo3").style.color = "white";
    document.getElementById("jo4").style.color = "white";
    document.getElementById("jo5").style.color = "white";
    document.getElementById("jo6").style.color = "white";
    document.getElementById("jo7").style.color = "white";
    document.getElementById("jo8").style.color = "white";
    document.getElementById("jo9").style.color = "white";
    document.getElementById("jo10").style.color = "white";
    document.getElementById("jo11").style.color = "white";
    document.getElementById("jo12").style.color = "white";
    document.getElementById("jo13").style.color = "white";
    document.getElementById("1k").style.color = "white";
    document.getElementById("2k").style.color = "white";
    document.getElementById("3k").style.color = "white";
    document.getElementById("4k").style.color = "white";
    document.getElementById("5k").style.color = "white";
    document.getElementById("6k").style.color = "white";
    document.getElementById("7k").style.color = "white";
    document.getElementById("8k").style.color = "white";
    document.getElementById("9k").style.color = "white";
    document.getElementById("rossz1_1").style.color = "white";
    document.getElementById("rossz1_2").style.color = "white";
    document.getElementById("rossz2_1").style.color = "white";
    document.getElementById("rossz2_2").style.color = "white";
    document.getElementById("rossz3_1").style.color = "white";
    document.getElementById("rossz3_2").style.color = "white";
    document.getElementById("rossz4_1").style.color = "white";
    document.getElementById("rossz4_2").style.color = "white";
    document.getElementById("rossz5_1").style.color = "white";
    document.getElementById("rossz5_2").style.color = "white";
    document.getElementById("rossz6_1").style.color = "white";
    document.getElementById("rossz6_2").style.color = "white";
    document.getElementById("rossz7_1").style.color = "white";
    document.getElementById("rossz7_2").style.color = "white";
}
