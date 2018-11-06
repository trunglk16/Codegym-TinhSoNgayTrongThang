var a ;
function get() {
    a = document.getElementById("month");
    console.log(a.value);

    if (a.value < 0 || a.value > 12) {
        document.getElementById("div").innerHTML = "Khong ton tai thang " + a.value + " trong mot nam";
    }else{
        switch (a.value) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                document.getElementById("div").innerHTML = "Thang " + a.value + " co 31 ngay";
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                document.getElementById("div").innerHTML = "Thang " + a.value + " co 30 ngay";
                break;
            case "2":
                document.getElementById("div").innerHTML = "Thang  2 co 28 hoac 29 ngay";
        }
    }


}