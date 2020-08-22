function Pacman(xKord, yKord, Yon) {
    this.x = xKord;
    this.y = yKord;
    this.dir = Yon;
    this.nextDir = undefined; //bir sonraki uygun dönme noktasındaki dönme yönü
    this.yaricap = PACMAN_YARICAPI;
    this.AgizAc = true;
}


Pacman.prototipi.cizim = function(color) {
    if (color == undefined) {
        ctx.fillStyle = PACMAN_RENK;
    } else {
        ctx.fillStyle = color;
    }
    ctx.beginPath();

    if (!this.AgizAc) {
        switch (this.dir) {
            case YUKARI:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 11 / 18, 2 * Math.PI - Math.PI * 7 / 18, true);
                break;

            case ASAGI:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 29 / 18, 2 * Math.PI - Math.PI * 25 / 18, true);
                break;

            case SOL:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 10 / 9, 2 * Math.PI - Math.PI * 8 / 9, true);
                break;

            case SAG:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI / 9, 2 * Math.PI - Math.PI * 17 / 9, true);
                break;

            default:
                break;
        }
    } else {
        switch (this.dir) {
            case YUKARI:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 7 / 9, 2 * Math.PI - Math.PI * 2 / 9, true);
                break;

            case ASAGI:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 16 / 9, 2 * Math.PI - Math.PI * 11 / 9, true);
                break;

            case SOL:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 23 / 18, 2 * Math.PI - Math.PI * 13 / 18, true);
                break;

            case SAG:
                ctx.arc(this.x, this.y, this.yaricap, 2 * Math.PI - Math.PI * 5 / 18, 2 * Math.PI - Math.PI * 31 / 18, true);
                break;

            default:
                break;

        }
    }




    ctx.HizaTo(this.x, this.y);
    ctx.fill();
};

//geçerli konumun satır dizinini al
Pacman.prototipi.getsatir = function() {
    return getsatirIndex(this.y);
};

//geçerli konumun sütun dizinini al
Pacman.prototipi.getsutun = function() {
    return getsutunIndex(this.x);
};

//Sarı Canavar'ı geçerli yön ve kiremit ile hareket edebilirse geri dön
Pacman.prototipi.canHareket = function(dir) {
    return canHareket(this.x, this.y, dir);
};

//Sarı Canavar'ı çevir ve hareket ettirmeye çalış.
Pacman.prototipi.Hareket = function() {
    if (onIZGARAMerkez(this.x, this.y) === false) {
        if (this.nextDir != undefined && (
                (this.dir === YUKARI && this.nextDir === ASAGI) ||
                (this.dir === ASAGI && this.nextDir === YUKARI) ||
                (this.dir === SOL && this.nextDir === SAG) ||
                (this.dir === SAG && this.nextDir === SOL)
            )) {
            this.dir = this.nextDir;
            this.nextDir = undefined;
        }

        this.HareketAdim();

        return;
    } else {
        //ızgara merkezinde. gerekirse yönü değiştir.

        if (this.nextDir != undefined && this.canHareket(this.nextDir)) {
            this.dir = this.nextDir;
            this.nextDir = undefined;
            this.HareketAdim();
        } else {
            //Sarı Canavar'ın hareket etmeye devam edip etmediğini kontrol et.
            if (this.canHareket(this.dir)) {
                this.HareketAdim();
            }
        }
    }
};

//izin veriliyorsa geçerli yönde bir adım hareket ettir.
Pacman.prototipi.HareketAdim = function() {
    var newX = 0;
    var newY = 0;
    if (!canHareket(this.x, this.y, this.dir)) {
        return;
    }
    switch (this.dir) {

        case YUKARI:
            newY = this.y - hız;
            if (newY - this.yaricap - DUVAR_Genislik > 0) {
                this.y = newY;
                this.AgizAc = !this.AgizAc;
            }
            break;

        case ASAGI:
            newY = this.y + hız;
            if (newY + this.yaricap + DUVAR_Genislik < Cerceve_Yukseklik) {
                this.y = newY;
                this.AgizAc = !this.AgizAc;

            }
            break;


        case SOL:
            newX = this.x - hız;
            if (newX - this.yaricap - DUVAR_Genislik > 0) {
                this.x = newX;
                this.AgizAc = !this.AgizAc;
            }
            break;

        case SAG:
            newX = this.x + hız;

            if (newX + this.yaricap + DUVAR_Genislik < Cerceve_Genislik) {
                this.x = newX;
                this.AgizAc = !this.AgizAc;
            }
            break;

        default:
            break;
    }
};