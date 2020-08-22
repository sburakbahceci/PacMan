function hayalet(xKord, yKord, gColor, Yon) {
    this.x = xKord;
    this.y = yKord;
    this.color = gColor;
    this.dir = Yon;
    this.isMavi_Hayalet = false;
    this.yaricap = HAYALET_YARICAPI;
    this.isHareketli = false;
    this.isYanarli = false;
    this.isOlu = false;
    this.hız = hız;
    this.hız1 = hız1;
    this.seviye = level;
    this.AdimSayac = 0;

}

//Yenilen hayaleti hayalet evine geri gönder
//Hayalet evde duracağı yer hayaletin rengi ile belirlenir.
hayalet.prototipi.tohayaletEv = function() {
    var initX, initY;
    switch (this.color) {
        case ORANGE:
            initX = hayaletEv[0][1] * IZGARA_Genislik + IZGARA_Genislik / 2;
            initY = hayaletEv[0][0] * IZGARA_Genislik + IZGARA_Genislik / 2;
            break;

        case CYAN:
            initX = hayaletEv[1][1] * IZGARA_Genislik + IZGARA_Genislik / 2;
            initY = hayaletEv[1][0] * IZGARA_Genislik + IZGARA_Genislik / 2;
            break;

        case PINK:
            initX = hayaletEv[2][1] * IZGARA_Genislik + IZGARA_Genislik / 2;
            initY = hayaletEv[2][0] * IZGARA_Genislik + IZGARA_Genislik / 2;
            break;

        case RED:
            initX = hayaletEv[3][1] * IZGARA_Genislik + IZGARA_Genislik / 2;
            initY = hayaletEv[3][0] * IZGARA_Genislik + IZGARA_Genislik / 2;
            break;


    }
    this.x = initX;
    this.y = initY;
    this.dir = ASAGI;
    this.AdimSayac = 0;
};

hayalet.prototipi.cizim = function() {

    if (!this.isOlu) {
        // Hayalet rengi
        if (this.isMavi_Hayalet) {
            if (this.isYanarli) {
                ctx.fillStyle = GECIS_RENK;
            } else {
                ctx.fillStyle = MAVI_PACMAN;
            }
        } else {
            ctx.fillStyle = this.color;
        }

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.yaricap, Math.PI, 0, false);
        ctx.HareketTo(this.x - this.yaricap, this.y);


        if (!this.isHareketli) {
            ctx.HizaTo(this.x - this.yaricap, this.y + this.yaricap);
            ctx.HizaTo(this.x - this.yaricap + this.yaricap / 3, this.y + this.yaricap - this.yaricap / 4);
            ctx.HizaTo(this.x - this.yaricap + this.yaricap / 3 * 2, this.y + this.yaricap);
            ctx.HizaTo(this.x, this.y + this.yaricap - this.yaricap / 4);
            ctx.HizaTo(this.x + this.yaricap / 3, this.y + this.yaricap);
            ctx.HizaTo(this.x + this.yaricap / 3 * 2, this.y + this.yaricap - this.yaricap / 4);

            ctx.HizaTo(this.x + this.yaricap, this.y + this.yaricap);
            ctx.HizaTo(this.x + this.yaricap, this.y);
        } else {
            ctx.HizaTo(this.x - this.yaricap, this.y + this.yaricap - this.yaricap / 4);
            ctx.HizaTo(this.x - this.yaricap + this.yaricap / 3, this.y + this.yaricap);
            ctx.HizaTo(this.x - this.yaricap + this.yaricap / 3 * 2, this.y + this.yaricap - this.yaricap / 4);
            ctx.HizaTo(this.x, this.y + this.yaricap);
            ctx.HizaTo(this.x + this.yaricap / 3, this.y + this.yaricap - this.yaricap / 4);
            ctx.HizaTo(this.x + this.yaricap / 3 * 2, this.y + this.yaricap);
            ctx.HizaTo(this.x + this.yaricap, this.y + this.yaricap - this.yaricap / 4);
            ctx.HizaTo(this.x + this.yaricap, this.y);
        }


        ctx.fill();
    }


    if (this.isMavi_Hayalet) {

        if (this.isYanarli) {
            ctx.fillStyle = "#f00";
            ctx.CarpmaStyle = "f00";
        } else {
            ctx.fillStyle = "white";
            ctx.CarpmaStyle = "white";
        }

        //Gözleri
        ctx.beginPath(); //Sol göz
        ctx.arc(this.x - this.yaricap / 2.5, this.y - this.yaricap / 5, this.yaricap / 5, 0, Math.PI * 2, true); // white
        ctx.fill();

        ctx.beginPath(); // Sağ göz
        ctx.arc(this.x + this.yaricap / 2.5, this.y - this.yaricap / 5, this.yaricap / 5, 0, Math.PI * 2, true); // white
        ctx.fill();

        //Ağız
        ctx.beginPath();
        ctx.HizaGenislik = 1;
        ctx.HareketTo(this.x - this.yaricap + this.yaricap / 5, this.y + this.yaricap / 2);
        ctx.HizaTo(this.x - this.yaricap + this.yaricap / 3, this.y + this.yaricap / 4);
        ctx.HizaTo(this.x - this.yaricap + this.yaricap / 3 * 2, this.y + this.yaricap / 2);
        ctx.HizaTo(this.x, this.y + this.yaricap / 4);
        ctx.HizaTo(this.x + this.yaricap / 3, this.y + this.yaricap / 2);
        ctx.HizaTo(this.x + this.yaricap / 3 * 2, this.y + this.yaricap / 4);
        ctx.HizaTo(this.x + this.yaricap - this.yaricap / 5, this.y + this.yaricap / 2);
        ctx.Carpma();
    } else {
        // Gözler
        ctx.fillStyle = "white"; //Sol göz
        ctx.beginPath();
        ctx.arc(this.x - this.yaricap / 2.5, this.y - this.yaricap / 5, this.yaricap / 3, 0, Math.PI * 2, true); // white
        ctx.fill();

        ctx.fillStyle = "white"; //Sağ göz
        ctx.beginPath();
        ctx.arc(this.x + this.yaricap / 2.5, this.y - this.yaricap / 5, this.yaricap / 3, 0, Math.PI * 2, true); // white
        ctx.fill();


        switch (this.dir) {

            case YUKARI:
                ctx.fillStyle = "black"; //Sol göz küresi
                ctx.beginPath();
                ctx.arc(this.x - this.yaricap / 3, this.y - this.yaricap / 5 - this.yaricap / 6, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();

                ctx.fillStyle = "black"; //Sağ göz küresi
                ctx.beginPath();
                ctx.arc(this.x + this.yaricap / 3, this.y - this.yaricap / 5 - this.yaricap / 6, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();
                break;

            case ASAGI:
                ctx.fillStyle = "black"; //Sol göz küresi
                ctx.beginPath();
                ctx.arc(this.x - this.yaricap / 3, this.y - this.yaricap / 5 + this.yaricap / 6, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();

                ctx.fillStyle = "black"; //Sağ göz küresi
                ctx.beginPath();
                ctx.arc(this.x + this.yaricap / 3, this.y - this.yaricap / 5 + this.yaricap / 6, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();
                break;

            case SOL:
                ctx.fillStyle = "black"; //Sol göz küresi
                ctx.beginPath();
                ctx.arc(this.x - this.yaricap / 3 - this.yaricap / 5, this.y - this.yaricap / 5, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();

                ctx.fillStyle = "black"; //Sağ göz küresi
                ctx.beginPath();
                ctx.arc(this.x + this.yaricap / 3 - this.yaricap / 15, this.y - this.yaricap / 5, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();
                break;

            case SAG:
                ctx.fillStyle = "black"; //Sol göz küresi
                ctx.beginPath();
                ctx.arc(this.x - this.yaricap / 3 + this.yaricap / 15, this.y - this.yaricap / 5, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();

                ctx.fillStyle = "black"; //Sağ göz küresi
                ctx.beginPath();
                ctx.arc(this.x + this.yaricap / 3 + this.yaricap / 5, this.y - this.yaricap / 5, this.yaricap / 6, 0, Math.PI * 2, true);
                ctx.fill();
                break;

        }

    }



};

hayalet.prototipi.getsatir = function() {
    return getsatirIndex(this.y);
};

hayalet.prototipi.getsutun = function() {
    return getsutunIndex(this.x);
};

//İzin veriliyorsa geçerli yönde bir adım hareket ettirin
hayalet.prototipi.HareketAdim = function() {
    var newX = 0;
    var newY = 0;
    if (!canHareket(this.x, this.y, this.dir)) {
        return;
    }
    switch (this.dir) {

        case YUKARI:
            newY = this.y - this.hız;
            if (newY - this.yaricap - DUVAR_Genislik > 0) {
                this.y = newY;
            }
            break;

        case ASAGI:
            newY = this.y + this.hız;
            if (newY + this.yaricap + DUVAR_Genislik < Cerceve_Yukseklik) {
                this.y = newY;

            }
            break;


        case SOL:
            newX = this.x - this.hız;
            if (newX - this.yaricap - DUVAR_Genislik > 0) {
                this.x = newX;
            }
            break;

        case SAG:
            newX = this.x + this.hız;

            if (newX + this.yaricap + DUVAR_Genislik < Cerceve_Genislik) {
                this.x = newX;
            }
            break;

        default:
            break;
    }
};


//180 derece dönüş yap
hayalet.prototipi.turnBack = function() {
    this.dir = tersDir(this.dir);
};

hayalet.prototipi.Hareket = function() {

    this.isHareketli = !this.isHareketli; //hayalet hareket ediyormuş gibi görünür
    if (this.isMavi_Hayalet) {
        //Eğer yavaş modda ise, hızı azaltın ve hemen dönün.
        //Hayalet normale dönene kadar rastgele hareketler yapmaya başlar
        this.hız = hız / 2;
        if (Mavi_HayaletSayac === Mavi_Hayalet_Suresi) {
            this.dir = tersDir(this.dir);
        }
        if (onIZGARAMerkez(this.x, this.y) === false) {
            this.HareketAdim();
        } else {
            var IZGARA = Labirent[getsatirIndex(this.y)][getsutunIndex(this.x)];
            if (IZGARA.IZGARAtipi === SOL_UST_SAG) {
                this.dir = ASAGI;
                this.HareketAdim();
            } else if (IZGARA.IZGARAtipi === UST_SAG_ALT) {
                this.dir = SOL;
                this.HareketAdim();
            } else if (IZGARA.IZGARAtipi === SAG_ALT_SOL) {
                this.dir = YUKARI;
                this.HareketAdim();
            } else if (IZGARA.IZGARAtipi === ALT_SOL_UST) {
                this.dir = SAG;
                this.HareketAdim();
            } else {
                this.randomHareket();
            }

        }

        this.AdimSayac++;
    } else {
        //normal hayalet
        if (this.AdimSayac != 0 && this.AdimSayac % 2 != 0) {
            this.hız = hız / 2;
            this.AdimSayac = 0;
            if (level > 2) {
                hız = hız1;
            }
        } else {
            this.hız = hız;
        }
        if (onIZGARAMerkez(this.x, this.y) === false) {
            this.HareketAdim();
        } else {

            var IZGARA = Labirent[getsatirIndex(this.y)][getsutunIndex(this.x)];
            if (IZGARA.IZGARAtipi === SOL_UST_SAG) {
                this.dir = ASAGI;
                this.HareketAdim();
            } else if (IZGARA.IZGARAtipi === UST_SAG_ALT) {
                this.dir = SOL;
                this.HareketAdim();
            } else if (IZGARA.IZGARAtipi === SAG_ALT_SOL) {
                this.dir = YUKARI;
                this.HareketAdim();
            } else if (IZGARA.IZGARAtipi === ALT_SOL_UST) {
                this.dir = SAG;
                this.HareketAdim();
            } else {
                switch (this.color) {
                    case KIRMIZI:
                        this.blinkyHareket();
                        break;

                    case CIYAN:
                    case TURUNCU:
                        this.inkyHareket();
                        break;

                    case PEMBE:
                        this.pinkyHareket();
                        break;
                }
            }
        }
    }

};

//Kırmızı hayalet her zaman Sarı Canavar'a en yakın olacak yolu seçer
hayalet.prototipi.blinkyHareket = function() {
    this.HareketUSTPacman(true);
};

//Pembe hayalet Sarı Canavar'ın 4 adım önünde olan karoyu seçer
hayalet.prototipi.pinkyHareket = function() {
    this.HareketUSTPacman(false);
};

//Turkuaz ve Turuncu hayaletlerin hareketi öngörülemez, rastgele hareket eder
hayalet.prototipi.inkyHareket = function() {
    this.randomHareket();
};

hayalet.prototipi.HareketUSTPacman = function(HedefPacman) {
    var CokBuyukMesafe = Cerceve_Genislik * Cerceve_Yukseklik;
    var SOLMesafe, SAGMesafe, upMesafe, AsagiMesafe;
    var Dir = this.dir;
    var minMesafe = CokBuyukMesafe;

    if (Dir === SAG || !canHareket(this.x, this.y, SOL)) {
        SOLMesafe = CokBuyukMesafe;
    } else {
        SOLMesafe = this.getTestMesafeance(SOL, HedefPacman);
    }

    if (Dir === SOL || !canHareket(this.x, this.y, SAG)) {
        SAGMesafe = CokBuyukMesafe;
    } else {
        SAGMesafe = this.getTestMesafeance(SAG, HedefPacman);
    }

    if (Dir === ASAGI || !canHareket(this.x, this.y, YUKARI)) {
        upMesafe = CokBuyukMesafe;
    } else {
        upMesafe = this.getTestMesafeance(YUKARI, HedefPacman);
    }

    if (Dir === YUKARI || !canHareket(this.x, this.y, ASAGI)) {
        AsagiMesafe = CokBuyukMesafe;
    } else {
        AsagiMesafe = this.getTestMesafeance(ASAGI, HedefPacman);
    }
    this.dir = Dir;
    minMesafe = Math.min(Math.min(SOLMesafe, SAGMesafe), Math.min(upMesafe, AsagiMesafe));
    switch (minMesafe) {
        case SOLMesafe:
            this.dir = SOL;
            break;

        case SAGMesafe:
            this.dir = SAG;
            break;

        case upMesafe:
            this.dir = YUKARI;
            break;

        case AsagiMesafe:
            this.dir = ASAGI;
            break;
    }
    this.HareketAdim();
};

//Verilen yönde bir adım hareket etmiş gibi bu hayaletten Sarı Canavar'a olan mesafeyi alın
hayalet.prototipi.getTestMesafeance = function(dir, HedefPacman) {
    var toReturn = 0;
    this.dir = dir;
    this.HareketAdim();
    if (HedefPacman) {
        toReturn = Math.sqrt(Math.pow((this.x - mrPacman.x), 2) + Math.pow(this.y - mrPacman.y, 2));
    } else {
        switch (mrPacman.dir) {
            case SOL:
                toReturn = Math.sqrt(Math.pow((this.x - (mrPacman.x - 4 * IZGARA_Genislik)), 2) + Math.pow(this.y - mrPacman.y, 2));
                break;

            case SAG:
                toReturn = Math.sqrt(Math.pow((this.x - (mrPacman.x + 4 * IZGARA_Genislik)), 2) + Math.pow(this.y - mrPacman.y, 2));
                break;

            case YUKARI:
                toReturn = Math.sqrt(Math.pow((this.x - mrPacman.x), 2) + Math.pow(this.y - (mrPacman.y - 4 * IZGARA_Yukseklik), 2));
                break;

            case ASAGI:
                toReturn = Math.sqrt(Math.pow((this.x - mrPacman.x), 2) + Math.pow(this.y - (mrPacman.y + 4 * IZGARA_Yukseklik), 2));
                break;

            default:
                toReturn = Math.sqrt(Math.pow((this.x - mrPacman.x), 2) + Math.pow(this.y - mrPacman.y, 2));
                break;

        }
    }
    this.turnBack();
    this.HareketAdim();
    return toReturn;
};

//Labirentte rastgele hareket et
hayalet.prototipi.randomHareket = function() {
    var nextDir = parseInt(Math.random() * 4) + 1;
    while (true) {
        if (nextDir != tersDir(this.dir) &&
            canHareket(this.x, this.y, nextDir)) {
            break;
        }
        nextDir = parseInt(Math.random() * 4) + 1;
    }

    this.dir = nextDir;
    this.HareketAdim();
};