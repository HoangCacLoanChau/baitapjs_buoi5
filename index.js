// bài 1 
/**
 * lương 1 ngày: 100 000 $
 * lương = số ngày làm * 100 000 (lương 1 ngày) 
 */
function tinhLuong(){
    var soNgayLam = document.getElementById("inputBai1").value;
    var   result = document.getElementById("resultBai1");
    result.innerHTML = `${Intl.NumberFormat('vn-VN').format(soNgayLam*100000)} VND` ;
}
// bài 2
/**
 * 
 * trungbinh5so = (so1 +so2 + so3 +so4 + so5 )/5
 */

function tinhTrungBinh(){
    var soMot = document.getElementById("inputBai2So1").value*1;
    var soHai = document.getElementById("inputBai2So2").value*1;
    var soBa = document.getElementById("inputBai2So3").value*1;
    var soBon = document.getElementById("inputBai2So4").value*1;
    var soNam = document.getElementById("inputBai2So5").value*1;
    var resultBai2 = document.getElementById("resultBai2");
    var avg = (soMot + soHai + soBa + soBon +soNam ) / 5;
    console.log("🚀 ~ tinhTrungBinh ~ avg:", avg)
    resultBai2.innerHTML = avg;
}

//bài 3 
/**
 * 1usd = 23.500 VND
 * quydoi1Usd = 23.500 * so USD nhap vao
 */

function quyDoi(){
    var usd = document.getElementById("inputBai3").value;
    var resultBai3 = document.getElementById("resultBai3");
    resultBai3.innerHTML = `${Intl.NumberFormat('vn-VN').format(usd*23500)} VND`

}
// bài 4
/**
 * Diện tích: dài x rộng
 * Chu vi: (dài + rộng) x 2
 */
function tinhCvDt(){
    var chieudai =document.getElementById("chieudai").value*1;
    var chieurong =document.getElementById("chieurong").value*1;
    var chuvi = document.getElementById("chuVi");
    var dientich = document.getElementById("dienTich");
    chuvi.innerHTML = (chieudai + chieurong) * 2;
    dientich.innerHTML = chieudai * chieurong;
}

//bai 5 
/**
 * hangdonvi = number chia lấy dư cho 10;
 * hangchuc = number chia 10 rồi làm tròn để lấy hàng chục;
 */
function tinhTong(){
    var number = document.getElementById("inputBai5").value*1;
    var sum = document.getElementById("resultBai5");
    console.log("🚀 ~ tinhTong ~ number:", number);
    var hangDonVi = number %10;
    var hangChuc = Math.floor(number / 10);
    sum.innerHTML = hangDonVi + hangChuc;
    
}