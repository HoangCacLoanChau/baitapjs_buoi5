// bài 1 
/**
    Điểm tổng kết = diem1 + diem2 + diem3 + điểm ưu tiên
    Điểm ưu tiên - theo khu vực - 3 khu vực
                 - theo đối tượng -3 đối tượng

    Trúng tuyển = Điểm tổng >= Điểm chuẩn && diem1 > 0 && diem2 >0 && diem 3 >0

 */
function getKhuVuc(loaiKhuVuc){
    diemCongKhuVuc = 0;
    switch(loaiKhuVuc){
        case "A":  diemCongKhuVuc = 2;
        return diemCongKhuVuc;
        case "B":  diemCongKhuVuc = 1;
        return diemCongKhuVuc;
        case "C":  diemCongKhuVuc = 0.5;
        return diemCongKhuVuc;
        default:  diemCongKhuVuc = 0;
        return diemCongKhuVuc;
    }
}
function getDoiTuong(loaiDoiTuong){
     diemCongDoiTuong= 0;
    switch(loaiDoiTuong){
        case "1":  diemCongDoiTuong = 2.5;
        return diemCongDoiTuong;
        case "2":  diemCongDoiTuong = 1.5;
        return diemCongDoiTuong;
        case "3":  diemCongDoiTuong = 1;
        return diemCongDoiTuong;
        default:  diemCongDoiTuong = 0;
        return diemCongDoiTuong;
    }
   
}

function TinhDiem(){
    var diemChuan = document.getElementById("diem-chuan").value*1;
    var khuVuc = document.querySelector("#khu-vuc").value;
    var doiTuong = document.querySelector("#doi-tuong").value;
    var diem1 = document.getElementById("bai1-diem1").value*1;
    var diem2 = document.getElementById("bai1-diem2").value*1;
    var diem3 = document.getElementById("bai1-diem3").value*1;
    var   result = document.getElementById("resultBai1");
    diemKhuVuc = getKhuVuc(khuVuc);
    diemDoiTuong = getDoiTuong(doiTuong);
    
    diemTongket = diem1 +diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    if(diem1 <=0 || diem2 <=0 || diem3 <=0){
      result.innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0` ;
    }else{
        diemTongket >= diemChuan ?  result.innerHTML = `Bạn đã ĐẬU. Điểm của bạn là: ${diemTongket} </br> Điểm cộng
        khu vực: ${diemKhuVuc} </br> Điểm cộng đối tượng ưu tiên: ${diemDoiTuong}` 
        : result.innerHTML = `Bạn đã RỚT do không đạt điểm chuẩn. Điểm của bạn là: ${diemTongket}`; 
    }
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