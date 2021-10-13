function aqua(number) {
    var resutf = number * 2;
    return resutf;
}

function calculate() {
    var x = document.getElementById("input").value;
    var y = aqua(x);
    document.getElementById("re").innerHTML = y;
}

function chudihinhtron(bankinh) {
    var chudi = 2 * 3.14 * bankinh;
    return chudi;

}

function dttron(bankinh) {
    var dientich = bankinh * bankinh * 3.14;
    return dientich;

}

function calculates() {
    var q = document.getElementById("input1").value;

    var e = chudihinhtron(q);
    var r = dttron(q);
    document.getElementById("res").innerHTML = ("Chi vi:") + e + (" cm2");
    document.getElementById("red").innerHTML = ("Diện tích:") + r + (" cm2");


}

function calculate2() {
    var t = document.getElementById("input2").value;
    if (t > 110) {
        document.getElementById("req").innerHTML = ("ngươi nay khong tồn tại");

    } else {
        document.getElementById("req").innerHTML = (t * 365) + (" ngày tồn tại");

    }

}

function calculate3() {
    var y = document.getElementById("input3").value;
    var u = document.getElementById("input4").value;
    var i = y / (u * 2);
    if (i < 18.5) {
        document.getElementById("rew").innerHTML = ("Bạn gầy á nên ăn nhiếu vào");
    } else if (i < 23) {
        document.getElementById("rew").innerHTML = ("bạn binh thường");

    } else if (i < 25) {
        document.getElementById("rew").innerHTML = ("Có nguy co beo phì");

    } else if (i < 29.9) {
        document.getElementById("rew").innerHTML = ("béo phì độ 1 nên kiên ăn");

    } else {
        document.getElementById("rew").innerHTML = ("béo phì loại 2 nên nghĩ ăn đi");

    }
}

function calculate4() {
    var o = document.getElementById("input5").value;
    var can = o % 10;
    var chi = o % 12;
    var kqcan = "";
    var kqchi = "";
    switch (can) {

        case 0:
            kqcan = "Canh";
            break;

        case 1:
            kqcan = "Tân";
            break;
        case 2:
            kqcan = "Nhâm";
            break;
        case 3:
            kqcan = "Quý";
            break;
        case 4:
            kqcan = "Giáp";
            break;
        case 5:
            kqcan = "Ất";
            break;
        case 6:
            kqcan = "Bính";
            break;
        case 7:
            kqcan = "Đinh";
            break;
        case 8:
            kqcan = "Mậu";
            break;
        case 9:
            kqcan = "kỷ";
            break;


    }
    switch (chi) {
        case 0:
            kqchi = "Thân";
            break;
        case 1:
            kqchi = "Dậu";
            break;
        case 2:
            kqchi = "Tuất";
            break;
        case 3:
            kqchi = "Hợi";
            break;
        case 4:
            kqchi = "Tý";
            break;
        case 5:
            kqchi = "Sửu";
            break;
        case 6:
            kqchi = "Dần";
            break;
        case 7:
            kqchi = "Mẹo";
            break;
        case 8:
            kqchi = "Thìn";
            break;
        case 9:
            kqchi = "Tỵ";
            break;
        case 10:
            kqchi = "Ngọ";
            break;
        case 11:
            kqchi = "Mùi";
            break;

    }
    document.getElementById("ree").innerHTML =
        kqcan + " " +
        kqchi;
}


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}