var CerceveID = "Canvas";
var Cerceve_Genislik = 510;
var Cerceve_Yukseklik = 510;
var Cerceve = document.getElementById(CerceveID);
var ctx = Cerceve.getContext("2d");

// Oyun ızgarası
var IZGARA_Genislik = 30;
var IZGARA_Yukseklik = 30;
var DUVAR_Genislik = 3;
var numSatır = Cerceve_Genislik / IZGARA_Yukseklik;
var numSutun = Cerceve_Yukseklik / IZGARA_Genislik;

// Arayüz ve Canavar için renkler
var Arkaplan_Renk = "black";
var DUVAR_RENK = "blue";
var DUVAR_RENK1 = "green";
var DUVAR_RENK2 = "red";
var NOKTACIK_RENK = "white";
var PACMAN_RENK = "yellow";

// Hayaletler için renkler
var KIRMIZI = "red";
var PEMBE = "#ff9cce";
var CIYAN = "#00ffde";
var TURUNCU = "#ffb847";
var MAVI_PACMAN = "#0031ff";
var GECIS_RENK = "white";

// Hayalet,Sarı Canavar,Noktacıkların boyutu
var NORMAL_NOKTACIK_YARICAPI = 2;
var BUYUK_NOKTACIK_YARICAPI = 5;
var PACMAN_YARICAPI = 9;
var HAYALET_YARICAPI = 9;

// Yönlendirmeler
var YUKARI = 1;
var ASAGI = 2;
var SOL = 3;
var SAG = 4;


// Oyun Parametreleri
var SureId;
var YenidenBaslatmaZamanlayici = 0;
var ZamanlayiciGecikme = 80;
var hız = 5;
var hız1 = 6;
var skor = 0;
var seviye = 1;
var canlar = [];
var MAX_CAN = 3;
var CAN = MAX_CAN;
var Mavi_HayaletBonus = 200;
var MAX_Noktacık = 136;
var NoktacıkSOL = MAX_Noktacık;
var Mavi_HayaletSayac;
var Mavi_Hayalet_Suresi = 10000 / ZamanlayiciGecikme;


//Noktacık değeri
var NORMAL_NOKTACIK = 1
var BUYUK_NOKTACIK = 2;

//Hayalet,PacMan örnekleri
var girisPacman;
var girisBlinky;
var girisInky;
var mrPacman;
var blinky;
var inky;
var pinky;
var clyde;
var Hayaletler;

//Oyun durumu ve Harita
var OyunOn = false;
var OyunDuraklatma = false;
var Labirent = new Array(Cerceve_Yukseklik / IZGARA_Yukseklik);
var Labirentici = [
    //satir1
    [SOL_UST, UST_ALT, UST_ALT, UST, UST_ALT,
        UST_ALT, UST_ALT, SAG_UST, SOL_UST, UST,
        UST, UST, UST, UST, UST,
        UST, SAG_UST
    ],
    //satir2
    [SOL_SAG, ALT_SOL_UST, SAG_UST, SOL_SAG, SOL_UST,
        UST_ALT, UST_SAG_ALT, SOL_SAG, SOL_ALT, ALT,
        ALT, ALT, ALT, ALT, BOS_IZGARA,
        BOS_IZGARA, SAG
    ],
    //satir3
    [SOL_ALT, SAG_UST, SOL_SAG, SOL_SAG, SOL_SAG,
        ALT_SOL_UST, UST_ALT, BOS_IZGARA, UST_ALT, UST_ALT,
        UST_ALT, UST_ALT, UST_ALT, SAG_UST, SOL,
        BOS_IZGARA, SAG
    ],
    //satir4
    [CLOSED_IZGARA, SOL_SAG, SOL_SAG, SOL_SAG, SOL_ALT,
        UST_ALT, SAG_UST, SOL_SAG, ALT_SOL_UST, UST_ALT,
        UST_ALT, UST_ALT, UST_SAG_ALT, SOL_SAG, SOL,
        BOS_IZGARA, SAG
    ],
    //satir5
    [SOL_UST, SAG_ALT, SOL_SAG, SOL_ALT, UST,
        UST_SAG_ALT, SOL_SAG, SOL, UST_ALT, UST_ALT,
        UST_ALT, UST, UST_ALT, SAG_ALT, SOL,
        BOS_IZGARA, SAG
    ],
    //satir6
    [SOL_SAG, ALT_SOL_UST, ALT, UST_SAG_ALT, SOL_SAG,
        ALT_SOL_UST, SAG_ALT, SOL_SAG, SOL_UST, UST_ALT,
        SAG_UST, SOL_SAG, ALT_SOL_UST, UST_ALT, ALT,
        ALT, SAG_ALT
    ],
    //satir7
    [SOL, UST_ALT, UST_ALT, UST_ALT, ALT,
        UST_ALT, UST_ALT, SAG, SOL_SAG, SOL_UST_SAG,
        SOL_SAG, SOL, UST_ALT, UST_ALT, UST_ALT,
        UST_ALT, SAG_UST
    ],
    //satir8
    [SOL_SAG, ALT_SOL_UST, UST_ALT, UST_ALT, UST_ALT,
        UST_ALT, UST_SAG_ALT, SOL_SAG, SOL_SAG, SOL_SAG,
        SOL_SAG, SOL_SAG, ALT_SOL_UST, UST_ALT, UST_ALT,
        UST_SAG_ALT, SOL_SAG
    ],
    //satir9
    [SOL_ALT, UST_ALT, UST_ALT, UST_ALT, UST,
        UST_ALT, UST_ALT, SAG, SOL_SAG, SOL_SAG,
        SOL_SAG, SOL, UST_ALT, UST_ALT, UST_ALT,
        UST_ALT, SAG
    ],
    //satir10
    [SOL_UST, UST, UST, SAG_UST, SOL_SAG,
        ALT_SOL_UST, UST_SAG_ALT, SOL_SAG, SAG_ALT_SOL, SOL_SAG,
        SAG_ALT_SOL, SOL_SAG, ALT_SOL_UST, UST_ALT, UST_ALT,
        UST_SAG_ALT, SOL_SAG
    ],
    //satir11
    [SOL, BOS_IZGARA, BOS_IZGARA, SAG, SOL,
        UST_ALT, UST_ALT, ALT, UST, ALT,
        UST_ALT, ALT, UST, UST_ALT, UST_ALT,
        UST_ALT, SAG
    ],
    //satir12
    [SOL, BOS_IZGARA, BOS_IZGARA, SAG, SOL_SAG,
        ALT_SOL_UST, UST_ALT, SAG_UST, SOL_SAG, ALT_SOL_UST,
        UST_ALT, SAG_UST, SOL_SAG, ALT_SOL_UST, UST_ALT,
        SAG_UST, SOL_SAG
    ],
    //satir13
    [SOL, BOS_IZGARA, BOS_IZGARA, SAG, SOL,
        UST_ALT, UST_SAG_ALT, SOL_SAG, SOL, UST_ALT,
        UST_SAG_ALT, SOL_SAG, SOL, UST_ALT, SAG_UST,
        SOL_SAG, SOL_SAG
    ],
    //satir14
    [SOL, BOS_IZGARA, BOS_IZGARA, SAG, SOL_SAG,
        SOL_UST, UST_ALT, SAG_ALT, SOL_SAG, ALT_SOL_UST,
        UST_ALT, SAG, SOL_SAG, SOL_UST_SAG, SOL_SAG,
        SOL_SAG, SOL_SAG
    ],
    //satir15
    [SOL, BOS_IZGARA, BOS_IZGARA, SAG, SOL_SAG,
        SOL_SAG, ALT_SOL_UST, UST_ALT, BOS_IZGARA, UST_ALT,
        UST_SAG_ALT, SOL_SAG, SOL_SAG, SOL_SAG, SOL_SAG,
        SOL_SAG, SOL_SAG
    ],
    //satir16
    [SOL, BOS_IZGARA, BOS_IZGARA, SAG, SOL_SAG,
        SOL_ALT, UST_ALT, UST_SAG_ALT, SOL_SAG, ALT_SOL_UST,
        UST_ALT, SAG_ALT, SOL_SAG, SOL_SAG, SOL_SAG,
        SAG_ALT_SOL, SOL_SAG
    ],
    //satir17
    [SOL_ALT, ALT, ALT, SAG_ALT, SOL_ALT,
        UST_ALT, UST_ALT, UST_ALT, ALT, UST_ALT,
        UST_ALT, UST_ALT, SAG_ALT, SAG_ALT_SOL, SOL_ALT,
        UST_ALT, SAG_ALT
    ]
];

// yeniden çizilmeyen ızgaralar
var staticIZGARA = [];
var staticIZGARAIndex = 0;


// Sarı Canavar başlangıç yeri
var PacmanBaslangıcKonum = [4, 9];

// noktacık olmayan yerler
var Noktacıksız = [PacmanBaslangıcKonum, [5, 12],
    [5, 13],
    [5, 3],
    [9, 5],
    [9, 6],
    [1, 1],
    [5, 1],
    [3, 0],
    [2, 4],
    [4, 6],
    [5, 6],
    [5, 5],
    [12, 7],
    [14, 5],
    [12, 11],
    [14, 11]
];
var NoktacıksızIndex = Noktacıksız.length;


// labirentteki büyük noktacıklar
var buyukNoktacık = [
    [0, 0],
    [2, 13],
    [16, 4],
    [16, 16],
    [2, 5],
    [14, 10]
];

var buyukNoktacık1 = [
    [5, 4],
    [0, 7],
    [6, 13],
    [12, 14],
    [16, 9],
    [14, 6]
];


// hayaletlerin çıkış yeri
var hayaletEv = [];
var hayaletEvIndex = 0;


function initCerceve(Genislik, Yukseklik) {
    if (Genislik === undefined || !(Genislik instanceof Number)) {
        Genislik = Cerceve_Genislik;
    }
    if (Yukseklik === undefined || !(Yukseklik instanceof Number)) {
        Yukseklik = Cerceve_Yukseklik;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, Cerceve_Genislik, Cerceve_Yukseklik);
}

// Labirent çiz, sol alt köşedeki talimatı yazdır, sağ üst köşedeki yaşamları göster
function initLabirent() {
    for (var i = 0; i < Labirent.length; i++) {
        var ilksatir = new Array(Cerceve_Genislik / IZGARA_Genislik);
        Labirent[i] = ilksatir;
    }

    // Tüm noktacıklar ve çizilen labirent
    for (var satir = 0; satir < Cerceve_Yukseklik / IZGARA_Yukseklik; satir++) {
        for (var sutun = 0; sutun < Cerceve_Genislik / IZGARA_Genislik; sutun++) {
            var noktacıktipi = NORMAL_NOKTACIK;
            var newIZGARA = new IZGARA(sutun * IZGARA_Genislik, satir * IZGARA_Yukseklik, Labirentici[satir][sutun], noktacıktipi);

            Labirent[satir][sutun] = newIZGARA;
            newIZGARA.cizim();
        }
    }

    //Olmaması gereken noktacıkların üzerine labirent çizme
    for (var i = 0; i < Noktacıksız.length; i++) {
        var x = Noktacıksız[i][0];
        var y = Noktacıksız[i][1];
        Labirent[x][y].noktacıktipi = undefined;
        Labirent[x][y].cizim();
    }

    // Büyük noktacıkları çizme
    for (var i = 0; i < buyukNoktacık.length; i++) {
        var x = buyukNoktacık[i][0];
        var y = buyukNoktacık[i][1];
        Labirent[x][y].noktacıktipi = BUYUK_NOKTACIK;
        Labirent[x][y].cizim();
    }

}


function initalanlar() {
    for (var i = 6; i < 10; i++) {
        hayaletEv[hayaletEvIndex] = [i, 9];
        hayaletEvIndex++;
    }


    for (var i = 0; i < 2; i++) {
        for (var j = 8; j < 17; j++) {
            staticIZGARA[staticIZGARAIndex] = [i, j];
            staticIZGARAIndex++;
        }
    }
    for (var i = 9; i < 17; i++) {
        for (var j = 0; j < 4; j++) {
            staticIZGARA[staticIZGARAIndex] = [i, j];
            staticIZGARAIndex++;
        }
    }
    for (var i = 2; i < 6; i++) {
        for (var j = 14; j < 17; j++) {
            staticIZGARA[staticIZGARAIndex] = [i, j];
            staticIZGARAIndex++;
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 8; j < 17; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var i = 2; i < 6; i++) {
        for (var j = 14; j < 17; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var i = 9; i < 17; i++) {
        for (var j = 0; j < 4; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var i = 1; i < 6; i++) {
        Noktacıksız[NoktacıksızIndex] = [i, 2];
        NoktacıksızIndex++;
    }
    for (var i = 1; i < 4; i += 2) {
        for (var j = 4; j < 7; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var j = 8; j < 13; j++) {
        Noktacıksız[NoktacıksızIndex] = [3, j];
        NoktacıksızIndex++;
    }
    for (var j = 1; j < 7; j++) {
        Noktacıksız[NoktacıksızIndex] = [7, j];
        NoktacıksızIndex++;
    }
    for (var i = 5; i < 10; i++) {
        for (var j = 8; j < 11; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var j = 12; j < 16; j++) {
        Noktacıksız[NoktacıksızIndex] = [7, j];
        NoktacıksızIndex++;
    }
    for (var j = 12; j < 16; j++) {
        Noktacıksız[NoktacıksızIndex] = [9, j];
        NoktacıksızIndex++;
    }
    for (var i = 11; i < 16; i += 2) {
        for (var j = 5; j < 8; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var i = 11; i < 16; i += 2) {
        for (var j = 9; j < 12; j++) {
            Noktacıksız[NoktacıksızIndex] = [i, j];
            NoktacıksızIndex++;
        }
    }
    for (var j = 13; j < 16; j++) {
        Noktacıksız[NoktacıksızIndex] = [11, j];
        NoktacıksızIndex++;
    }
    for (var i = 12; i < 16; i++) {
        Noktacıksız[NoktacıksızIndex] = [i, 15];
        NoktacıksızIndex++;
    }
    for (var i = 13; i < 17; i++) {
        Noktacıksız[NoktacıksızIndex] = [i, 13];
        NoktacıksızIndex++;
    }
}


//Daire çiz
function daire(ctx, cx, cy, yaricap) {

    ctx.beginPath();
    ctx.arc(cx, cy, yaricap, 0, 2 * Math.PI, true);
    ctx.fill();

}

//Ters yöne dön
function tersDir(dir) {
    switch (dir) {
        case YUKARI:
            return ASAGI;
            break;

        case ASAGI:
            return YUKARI;
            break;

        case SOL:
            return SAG;
            break;

        case SAG:
            return SOL;
            break;

        default:
            return -1;
    }
}

function getsatirIndex(yKord) {
    if (yKord === undefined) {
        return -1;
    }
    return parseInt(yKord / IZGARA_Yukseklik);
}


function getsutunIndex(xKord) {
    if (xKord === undefined) {
        return -1;
    }
    return parseInt(xKord / IZGARA_Genislik);
}

function uyku(ms) {
    var dt = new Date();
    dt.setTime(dt.getTime() + ms);
    while (new Date().getTime() < dt.getTime());
}

function fixIZGARA(x, y) {
    var satir = getsatirIndex(y);
    var sutun = getsutunIndex(x);

    if (xOnIZGARAMerkez(y)) {
        Labirent[satir][sutun].cizim();
        if (sutun + 1 < Labirent.length && !staticArrayContains([satir, sutun + 1])) {
            Labirent[satir][sutun + 1].cizim();
        }
        if (sutun - 1 >= 0 && !staticArrayContains([satir, sutun - 1])) {
            Labirent[satir][sutun - 1].cizim();
        }
    } else if (yOnIZGARAMerkez(x)) {
        Labirent[satir][sutun].cizim();
        if (satir + 1 < Labirent.length && !staticArrayContains([satir + 1, sutun])) {
            Labirent[satir + 1][sutun].cizim();
        }
        if (satir - 1 >= 0 && !staticArrayContains([satir - 1, sutun])) {
            Labirent[satir - 1][sutun].cizim();
        }
    }
}

function staticArrayContains(Kord) {
    var x = Kord[0];
    var y = Kord[1];
    for (var i = 0; i < staticIZGARA.length; i++) {
        if (x === staticIZGARA[i][0] &&
            y === staticIZGARA[i][1]) {
            return true;
        }
    }
    return false;
}

function hayaletEvContains(Kord) {
    var x = Kord[0];
    var y = Kord[1];
    for (var i = 0; i < hayaletEv.length; i++) {
        if (x === hayaletEv[i][0] &&
            y === hayaletEv[i][1]) {
            return true;
        }
    }
    return false;
}

function onIZGARAMerkez(x, y) {
    return xOnIZGARAMerkez(y) && yOnIZGARAMerkez(x);
}

function xOnIZGARAMerkez(y) {
    return ((y - IZGARA_Genislik / 2) % IZGARA_Genislik) === 0;
}

function yOnIZGARAMerkez(x) {
    return ((x - IZGARA_Yukseklik / 2) % IZGARA_Yukseklik) === 0;
}

//hareketli grafiğin verilen (x, y) yönünde verilen yöne doğru bir adım daha hareket edip edemeyeceğini göster
function canHareket(x, y, dir) {
    if (!onIZGARAMerkez(x, y)) {
        return true;
    }
    var canHareket = false;
    var currIZGARA = Labirent[getsatirIndex(y)][getsutunIndex(x)];
    var IZGARAtipi = currIZGARA.IZGARAtipi;
    switch (dir) {
        case YUKARI:
            if (IZGARAtipi != SOL_UST && IZGARAtipi != SAG_UST && IZGARAtipi != UST_ALT &&
                IZGARAtipi != UST && IZGARAtipi != SOL_UST_SAG &&
                IZGARAtipi != UST_SAG_ALT && IZGARAtipi != ALT_SOL_UST) {
                canHareket = true;
            }
            break;

        case ASAGI:
            if (IZGARAtipi != SOL_ALT && IZGARAtipi != UST_ALT && IZGARAtipi != SAG_ALT &&
                IZGARAtipi != ALT && IZGARAtipi != SAG_ALT_SOL &&
                IZGARAtipi != ALT_SOL_UST && IZGARAtipi != UST_SAG_ALT) {
                canHareket = true;
            }
            break;

        case SOL:
            if (IZGARAtipi != SOL_ALT && IZGARAtipi != SOL_UST && IZGARAtipi != SOL &&
                IZGARAtipi != SOL_SAG && IZGARAtipi != SOL_UST_SAG &&
                IZGARAtipi != ALT_SOL_UST && IZGARAtipi != SAG_ALT_SOL) {
                canHareket = true;
            }
            break;

        case SAG:
            if (IZGARAtipi != SAG_ALT && IZGARAtipi != SAG_UST && IZGARAtipi != SAG &&
                IZGARAtipi != SOL_SAG && IZGARAtipi != SAG_ALT_SOL &&
                IZGARAtipi != UST_SAG_ALT && IZGARAtipi != SOL_UST_SAG) {
                canHareket = true;
            }
            break;
        default:
            break;


    }
    return canHareket;
}



//Çizim talimatları
function printTalimat() {
    ctx.fillStyle = "white";
    ctx.font = "12px monospace";
    ctx.textAlign = "SOL";


    var txt = "PacMan'e\nHOSGELDINIZ \n\nYON TUSLARI VEYA\nWASD ILE OYNAYIN\n\nQ DURAKLAT\nE DEVAM ET\nF5 YENIDEN BASLAT\n\nSEVIYE :" + "\v" + seviye;
    var x = 12;
    var y = Cerceve_Yukseklik - 200;
    var HizaYukseklik = 15;
    var Hiza = txt.split('\n');



    for (var i = 0; i < Hiza.length; i++)
        ctx.fillText(Hiza[i], x, y + (i * HizaYukseklik));

    if (Hayaletler.length === 0) {
        ctx.fillStyle = "black";
        ctx.fillRect(x, Cerceve_Genislik - 40, 70, 30);
        ctx.fillStyle = "red";
        ctx.font = "16px monospace";
        ctx.textAlign = "Left";
        ctx.fillText("TANRI MODU", x, Cerceve_Genislik - 20);
    }

}

//sağ üst köşede kalan canlardan düşür
function gostercanlar() {
    ctx.fillStyle = "black";
    ctx.fillRect(Cerceve_Genislik - 80, 10, 70, 30);
    for (var i = 0; i < CAN - 1; i++) {
        canlar[i] = new Pacman(Cerceve_Genislik - 50 + 25 * i, 30, SAG);
        canlar[i].cizim();
    }

}

//Karşılama ekranını göster
function girisEkrani() {

    OyunOn = false;
    OyunDuraklatma = false;
    ctx.fillStyle = "white";
    ctx.font = "80px monospace";
    ctx.textAlign = "Center";
    ctx.fillText("PacMan", Cerceve_Genislik / 2, 170);
    ctx.font = "20px monospace";
    ctx.fillText("BASLAMAK ICIN S'YE BASIN.", Cerceve_Genislik / 2, 220);
    ctx.font = "20px monospace";
    ctx.fillText("TANRI MODUNDA BASLAMAK ICIN G'YE BASIN.", Cerceve_Genislik / 2, 250);
    ctx.font = "14px monospace";
    ctx.fillText("GELISTIREN: SAFA BURAK BAHCECI", Cerceve_Genislik / 2, Cerceve_Yukseklik / 20 * 19);

    girisPacman = new Pacman(Cerceve_Genislik / 5, Cerceve_Yukseklik / 3 * 2, SAG);
    girisPacman.yaricap = 30;
    girisPacman.cizim();

    girisBlinky = new hayalet(Cerceve_Genislik / 5 * 3.3, Cerceve_Yukseklik / 3 * 2, RED, SOL);
    girisBlinky.yaricap = 30;
    girisBlinky.cizim();

    girisInky = new hayalet(Cerceve_Genislik / 5 * 4, Cerceve_Yukseklik / 3 * 2, CYAN, SAG);
    girisInky.yaricap = 30;
    girisInky.cizim();
    SureId = setSure(updategirisEkrani, ZamanlayiciGecikme * 2);
}

//Karşılama ekranı animasyonları
function updategirisEkrani() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, Cerceve_Yukseklik / 2, Cerceve_Genislik, 140);
    girisPacman.AgizAc = !girisPacman.AgizAc;
    girisBlinky.isMoving = !girisBlinky.isMoving;
    girisInky.isMoving = !girisInky.isMoving;
    girisPacman.cizim();
    girisInky.cizim();
    girisBlinky.cizim();
}

function gosterskor() {
    ctx.fillStyle = "black";
    ctx.fillRect(Cerceve_Genislik - 250, 10, 190, 40);
    ctx.fillStyle = "white";
    ctx.font = "24px monospace";
    ctx.textAlign = "Left";
    ctx.fillText("skor: " + parseInt(skor), Cerceve_Genislik - 250, 37);
}

//Kazanma mesajını göster
function KazanmaMesajı() {
    ctx.fillStyle = "black";
    ctx.CarpmaStyle = "green";
    ctx.HizaGenislik = 5;
    ctx.fillRect(Cerceve_Genislik / 2 - 150, Cerceve_Yukseklik / 2 - 40, 300, 100);
    ctx.CarpmaRect(Cerceve_Genislik / 2 - 150, Cerceve_Yukseklik / 2 - 40, 300, 100);

    //Mesajı yazdır
    ctx.textAlign = "Merkez";
    ctx.fillStyle = "white";
    ctx.font = "16px monospace";
    ctx.fillText("Congratulations, you won!", Cerceve_Yukseklik / 2, Cerceve_Yukseklik / 2 + 6);
    ctx.font = "12px monospace";
    ctx.fillText("Yeni seviye icin R to play again", Cerceve_Yukseklik / 2, Cerceve_Yukseklik / 2 + 28);
}

//Kaybetme mesajını göster
function loseMessage() {
    ctx.fillStyle = "black";
    ctx.CarpmaStyle = "red";
    ctx.HizaGenislik = 5;
    ctx.fillRect(Cerceve_Genislik / 2 - 100, Cerceve_Yukseklik / 2 - 40, 200, 100);
    ctx.CarpmaRect(Cerceve_Genislik / 2 - 100, Cerceve_Yukseklik / 2 - 40, 200, 100);

    //Mesajı yazdır
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.font = "26px monospace";
    ctx.fillText("OYUN BITTI", Cerceve_Yukseklik / 2, Cerceve_Yukseklik / 2 + 7);
    ctx.font = "12px monospace";
    ctx.fillText("Tekrar baslamak icin F5'e bas.", Cerceve_Yukseklik / 2, Cerceve_Yukseklik / 2 + 28);
}

//Her kare için labirenti temizle
function updateCerceve() {
    YenidenBaslatmaZamanlayici++;
    if (OyunBitti() === true) {
        CAN--;
        seviye === 0;
        gostercanlar();
        if (CAN > 0) {
            uyku(500);
            clearSure(SureId);
            for (var i = 0; i < Hayaletler.length; i++) {
                fixIZGARA(Hayaletler[i].x, Hayaletler[i].y);
            }
            run();
        } else {
            clearSure(SureId);
            uyku(500);
            loseMessage();
        }

    } else if (KazananPacman() === true) {
        clearSure(SureId);
        uyku(500);
        KazanmaMesajı();
        Newseviye();
    } else {
        if (Mavi_HayaletSayac > 0 && Mavi_HayaletSayac < 2000 / ZamanlayiciGecikme) {
            for (var i = 0; i < Hayaletler.length; i++) {
                Hayaletler[i].isBlinking = !Hayaletler[i].isBlinking;
            }
        }
        if (Mavi_HayaletSayac > 0) {
            Mavi_HayaletSayac--;
        }
        if (Mavi_HayaletSayac === 0) {
            for (var i = 0; i < Hayaletler.length; i++) {
                Hayaletler[i].isOlu = false;
                Hayaletler[i].isMavi_Hayalet = false;
                Hayaletler[i.isBlinking = false];
                Mavi_HayaletBonus = 200;
            }
        }

        Yemeknoktacık();
        Yemekhayalet();
        mrPacman.Hareket();

        for (var i = 0; i < Hayaletler.length; i++) {
            if (Hayaletler[i].isOlu === false) {
                Hayaletler[i].Hareket();
            }
        }

        fixIZGARA(mrPacman.x, mrPacman.y);
        for (var i = 0; i < Hayaletler.length; i++) {
            fixIZGARA(Hayaletler[i].x, Hayaletler[i].y);
        }

        mrPacman.cizim();
        for (var i = 0; i < Hayaletler.length; i++) {
            Hayaletler[i].cizim();
        }
    }
}

//Noktacıkları yemeyi dene
function Yemeknoktacık() {
    if (onIZGARAMerkez(mrPacman.x, mrPacman.y)) {
        if (Labirent[mrPacman.getsatir()][mrPacman.getsutun()].noktacıktipi === NORMAL_NOKTACIK) {
            skor += parseInt(10);
            gosterskor();
            NoktacıkSOL--;
        } else if (Labirent[mrPacman.getsatir()][mrPacman.getsutun()].noktacıktipi === BUYUK_NOKTACIK) {
            skor += parseInt(50);
            gosterskor();
            NoktacıkSOL--;

            //Hayaletler yavaş moda girer
            for (var i = 0; i < Hayaletler.length; i++) {
                Hayaletler[i].isMavi_Hayalet = true;
            }
            Mavi_HayaletSayac = Mavi_Hayalet_Suresi;
        }
        Labirent[mrPacman.getsatir()][mrPacman.getsutun()].noktacıktipi = undefined;
        Labirent[mrPacman.getsatir()][mrPacman.getsutun()].cizim();
    }
}

//Yavaş moddaki hayaletleri yemeyi dene
function Yemekhayalet() {
    for (var i = 0; i < Hayaletler.length; i++) {
        if (Math.abs(mrPacman.x - Hayaletler[i].x) <= 5 && Math.abs(mrPacman.y - Hayaletler[i].y) <= 5 &&
            Hayaletler[i].isMavi_Hayalet && !Hayaletler[i].isOlu) {
            skor += parseInt(Mavi_HayaletBonus);
            Mavi_HayaletBonus *= 2;
            gosterskor();
            Hayaletler[i].isOlu = true;
            Hayaletler[i].tohayaletEv();
        }
    }
}

function OyunBitti() {
    for (var i = 0; i < Hayaletler.length; i++) {
        if (Math.abs(mrPacman.x - Hayaletler[i].x) <= 5 && Math.abs(mrPacman.y - Hayaletler[i].y) <= 5 &&
            !Hayaletler[i].isMavi_Hayalet) {
            return true;
        }
    }
    return false;
}

function KazananPacman() {
    return NoktacıkSOL === 0;
}

function Newseviye() {
    seviye++;
    return NoktacıkSOL === 0;

}

//Oyun her başladığında geri sayımı göster
function GeriSayim() {
    ctx.fillStyle = "black";
    ctx.fillRect(Cerceve_Yukseklik - 85, 70, 80, 80);
    ctx.fillStyle = "red";
    ctx.font = "50px monospace";
    ctx.textAlign = "center";
    ctx.fillText("3", Cerceve_Yukseklik - 43, 130);
    setTimeout(function() {
        ctx.fillStyle = "black";
        ctx.fillRect(Cerceve_Yukseklik - 85, 70, 80, 80);
        ctx.fillStyle = "orange";
        ctx.fillText("2", Cerceve_Yukseklik - 43, 130);
        setTimeout(function() {
            ctx.fillStyle = "black";
            ctx.fillRect(Cerceve_Yukseklik - 85, 70, 80, 80);
            ctx.fillStyle = "yellow";
            ctx.fillText("1", Cerceve_Yukseklik - 43, 130);
            setTimeout(function() {
                ctx.fillStyle = "black";
                ctx.fillRect(Cerceve_Yukseklik - 85, 70, 80, 80);
                ctx.fillStyle = "green";
                ctx.textAlign = "center";

                setTimeout(function() {
                    SureId = setSure(updateCerceve, ZamanlayiciGecikme);
                }, 500);
            }, 1000);
        }, 1000);
    }, 1000);
}


function OyunIciTus(event) {
    var tuskodu = event.tuskodu;
    var DuraklatmaKodu = 81; //q to Duraklatma
    var DevamKodu = 69; //e to resume
    var YenidenBaslatmaKodu = 82; //r to YenidenBaslatma
    var TanriModuKodu = 71; //g to enter god mode

    // wasd
    var wKodu = 87;
    var aKodu = 65;
    var sKodu = 83;
    var dKodu = 68;
    //Yön tuşları
    var SOLKodu = 37;
    var YUKARIKodu = 38;
    var SAGKodu = 39;
    var ASAGIKodu = 40;

    //Oyunu başlat
    if (!OyunOn) {
        if (tuskodu === sKodu) {
            clearSure(SureId);
            OyunOn = true;
            OyunDuraklatma = false;
            initLabirent();
            run();
            return;
        } else if (tuskodu === TanriModuKodu) {
            clearSure(SureId);
            Hayaletler = [];
            OyunOn = true;
            OyunDuraklatma = false;
            initLabirent();
            run(true);
            return;
        }
    } else {

        //Oyunu duraklat
        if (tuskodu === DuraklatmaKodu && !OyunDuraklatma) {
            clearSure(SureId);
            OyunDuraklatma = true;
            return;
        }

        //Oyunu devam ettir
        if (tuskodu === DevamKodu && OyunDuraklatma) {
            SureId = setSure(updateCerceve, ZamanlayiciGecikme);
            OyunDuraklatma = false;
            return;
        }

        //Oyunu yeniden başlat
        if (tuskodu === YenidenBaslatmaKodu && YenidenBaslatmaZamanlayici > 0) {
            OyunOn = true;
            OyunDuraklatma = false;
            NoktacıkSOL = MAX_Noktacık;
            DUVAR_RENK = DUVAR_RENK1;
            initLabirent();
            run();

            if (seviye > 1) {
                DUVAR_RENK1 = DUVAR_RENK2;
                buyukNoktacık = buyukNoktacık1;
            }
            if (seviye > 2) {
                hız = hız1;
                blinky = inky;
                clyde = pinky;
            }
        }
        //4 yönlü kontrol
        switch (tuskodu) {
            case YUKARIKodu:
            case wKodu:
                mrPacman.nextDir = mrPacman.dir === YUKARI ? undefined : YUKARI;
                break;

            case SAGKodu:
            case dKodu:
                mrPacman.nextDir = mrPacman.dir === SAG ? undefined : SAG;
                break;

            case SOLKodu:
            case aKodu:
                mrPacman.nextDir = mrPacman.dir === SOL ? undefined : SOL;
                break;

            case ASAGIKodu:
            case sKodu:
                mrPacman.nextDir = mrPacman.dir === ASAGI ? undefined : ASAGI;
                break;

            default:
                break;

        }
    }
}

//Oyunu tanrı modunda başlat.Sarı Canavar'ı  oluşturur.4 hayaletin konumlarını sıfırlar.Oyun alanından çıkarır.
function run(isTanriModu) {
    gosterskor();

    mrPacman = new Pacman(PacmanBaslangıcKonum[1] * IZGARA_Genislik + IZGARA_Genislik / 2, PacmanBaslangıcKonum[0] * IZGARA_Yukseklik + IZGARA_Yukseklik / 2, SAG);
    if (isTanriModu === undefined || !isTanriModu) {
        blinky = new hayalet(0, 0, KIRMIZI, ASAGI);
        inky = new hayalet(0, 0, CIYAN, ASAGI);
        pinky = new hayalet(0, 0, PEMBE, ASAGI);
        clyde = new hayalet(0, 0, TURUNCU, ASAGI);

        blinky.tohayaletEv();
        inky.tohayaletEv();
        pinky.tohayaletEv();
        clyde.tohayaletEv();

        Hayaletler = [blinky, inky, pinky, clyde];

        inky.cizim();
        blinky.cizim();
        pinky.cizim();
        clyde.cizim();
    } else {
        Hayaletler = [];
    }
    gostercanlar();
    printTalimat();

    mrPacman.cizim();
    GeriSayim();
}

initalanlar();
initCerceve(Cerceve_Genislik, Cerceve_Yukseklik);
Cerceve.addEventListener('keydown', OyunIciTus, false);
Cerceve.setAttribute('tabindex', '0');
Cerceve.focus();
girisEkrani();