var id = -1;

//Duvar sınırları
var KOSE = -1;
var SOL = 0;
var UST = 1;
var SAG = 2;
var ALT = 3;

var SOL_SAG = 4;
var SOL_UST = 5;
var SOL_ALT = 6;

var SAG_UST = 7;
var SAG_ALT = 8;
var UST_ALT = 9;

var ALT_SOL_UST = 10;
var SOL_UST_SAG = 11;
var UST_SAG_ALT = 12;
var SAG_ALT_SOL = 13;

var BOS_IZGARA = 14;
var KAPALI_IZGARA = 15;



function IZGARA(xKord, yKord, IZGARAtipi, noktacıktipi) {
    this.x = xKord;
    this.y = yKord;
    this.IZGARAtipi = IZGARAtipi === undefined ? BOS_IZGARA : IZGARAtipi;
    this.noktacıktipi = noktacıktipi;
}

IZGARA.prototipi.getsatir = function() {
    return getsatirIndex(this.y);
};

IZGARA.prototipi.getsutun = function() {
    return getsutunIndex(this.x);
};

IZGARA.prototipi.hasnoktacık = true;


IZGARA.prototipi.toString = function() {
    return "IZGARA (" + this.x + "," + this.y + ") - IZGARA tipi: " + this.IZGARAtipi;
};



IZGARA.prototipi.cizim = function() {
    ctx.fillStyle = Arkaplan_Renk;
    ctx.fillRect(this.x, this.y, IZGARA_Genislik, IZGARA_Yukseklik);
    var IZGARAtipi = this.IZGARAtipi;
    if (IZGARAtipi === undefined || IZGARAtipi === BOS_IZGARA) {
        this.cizimnoktacık();
        return;
    }

    switch (IZGARAtipi) {

        case SOL:
            this.addSOLKenar();
            break;

        case SAG:
            this.addSAGKenar();
            break;

        case UST:
            this.addUSTKenar();
            break;

        case ALT:
            this.addALTKenar();
            break;

        case SOL_SAG:
            this.addSOLKenar();
            this.addSAGKenar();
            break;

        case SOL_UST:
            this.addSOLKenar();
            this.addUSTKenar();
            break;

        case SOL_ALT:
            this.addSOLKenar();
            this.addALTKenar();
            break;

        case SAG_UST:
            this.addSAGKenar();
            this.addUSTKenar();
            break;

        case SAG_ALT:
            this.addSAGKenar();
            this.addALTKenar();
            break;

        case UST_ALT:
            this.addUSTKenar();
            this.addALTKenar();
            break;

        case KOSE:
            this.makeKoseYol();
            break;

        case SOL_UST_SAG:
            this.addSOLKenar();
            this.addUSTKenar();
            this.addSAGKenar();
            break;

        case UST_SAG_ALT:
            this.addUSTKenar();
            this.addSAGKenar();
            this.addALTKenar();
            break;

        case SAG_ALT_SOL:
            this.addSAGKenar();
            this.addALTKenar();
            this.addSOLKenar();
            break;

        case ALT_SOL_UST:
            this.addALTKenar();
            this.addSOLKenar();
            this.addUSTKenar();
            break;

        case KAPALI_IZGARA:
            this.addSOLKenar();
            this.addUSTKenar();
            this.addALTKenar();
            this.addSAGKenar();
            break;

        default:
            break;
    }
    this.cizimnoktacık();
};

IZGARA.prototipi.addSOLKenar = function() {
    ctx.fillStyle = DUVAR_RENK;
    ctx.fillRect(this.x, this.y, DUVAR_Genislik, IZGARA_Yukseklik);
};

IZGARA.prototipi.addSAGKenar = function() {
    ctx.fillStyle = DUVAR_RENK;
    ctx.fillRect(this.x + IZGARA_Genislik - DUVAR_Genislik, this.y, DUVAR_Genislik, IZGARA_Yukseklik);
};

IZGARA.prototipi.addUSTKenar = function() {
    ctx.fillStyle = DUVAR_RENK;
    ctx.fillRect(this.x, this.y, IZGARA_Genislik, DUVAR_Genislik);
};

IZGARA.prototipi.addALTKenar = function() {
    ctx.fillStyle = DUVAR_RENK;
    ctx.fillRect(this.x, this.y + IZGARA_Yukseklik - DUVAR_Genislik, IZGARA_Genislik, DUVAR_Genislik);
};

IZGARA.prototipi.makeKoseYol = function() {
    ctx.fillStyle = DUVAR_RENK;
    ctx.fillRect(this.x, this.y, DUVAR_Genislik, DUVAR_Genislik);
    ctx.fillRect(this.x + IZGARA_Genislik - DUVAR_Genislik, this.y, DUVAR_Genislik, DUVAR_Genislik);
    ctx.fillRect(this.x, this.y + IZGARA_Yukseklik - DUVAR_Genislik, DUVAR_Genislik, DUVAR_Genislik);
    ctx.fillRect(this.x + IZGARA_Genislik - DUVAR_Genislik, this.y + IZGARA_Yukseklik - DUVAR_Genislik, DUVAR_Genislik, DUVAR_Genislik);

};


IZGARA.prototipi.cizimnoktacık = function() {
    var noktacıktipi = this.noktacıktipi;
    var MerkezX = this.x + IZGARA_Genislik / 2;
    var MerkezY = this.y + IZGARA_Yukseklik / 2;

    ctx.fillStyle = NOKTACIK_RENK;
    if (noktacıktipi === undefined) {
        return;
    }

    if (noktacıktipi === NORMAL_NOKTACIK) {
        daire(ctx, MerkezX, MerkezY, NORMAL_NOKTACIK_YARICAPI);
    } else if (noktacıktipi === BUYUK_NOKTACIK) {
        daire(ctx, MerkezX, MerkezY, BUYUK_NOKTACIK_YARICAPI);
    } else {
        return;
    }

};