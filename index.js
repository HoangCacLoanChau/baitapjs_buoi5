const kw50 = 500, kw50_100 = 650, kw100_200 = 850, kw200_350 = 1100, kwConlai = 1300;
const NHA_DAN ="NhaDan", DOANH_NGHIEP= "DoanhNghiep";
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
        break;
        case "B":  diemCongKhuVuc = 1;
        break;
        case "C":  diemCongKhuVuc = 0.5;
        break;
        default:  diemCongKhuVuc = 0;
        break;
    }
    return diemCongKhuVuc;

}
function getDoiTuong(loaiDoiTuong){
     diemCongDoiTuong= 0;
    switch(loaiDoiTuong){
        case "1":  diemCongDoiTuong = 2.5;
        break;
        case "2":  diemCongDoiTuong = 1.5;
        break;
        case "3":  diemCongDoiTuong = 1;
        break;
        default:  diemCongDoiTuong = 0;
        break;
    }
    return diemCongDoiTuong;

   
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
        : result.innerHTML = `Bạn đã RỚT do không đạt điểm chuẩn. Điểm của bạn là: ${diemTongket}  </br> Điểm cộng
        khu vực: ${diemKhuVuc} </br> Điểm cộng đối tượng ưu tiên: ${diemDoiTuong}`; 
    }
}
// bài 2
/**
 * 
 */

function tinhTienDien(){
    var soKw = document.getElementById("so-kw").value*1;
    var hoTen = document.getElementById("ho-ten").value;
    var tienDien = 0;
    var resultBai2 = document.getElementById("resultBai2");
    if(soKw>0 &&    soKw <= 50){
        tienDien = soKw*kw50;
    }
    else if( soKw >50 && soKw <= 100){
        tienDien = 50*kw50 + (soKw-50)*kw50_100;
    }
    else if(soKw >100 && soKw <= 200){
        tienDien = 50*500 + 50*kw50_100 + (soKw-100)*kw100_200;
    }else if( soKw >200 && soKw <=350){
        tienDien = 50*kw50 +50*kw50_100 + 100*kw100_200 + (soKw-200)*kw200_350;
    }else if(soKw > 350){
        tienDien = 50*kw50 +50*kw50_100 + 100*kw100_200 + 150*kw200_350 +(soKw-50-50-100-150)*kwConlai;
    }
    else{
        alert("Vui lòng nhập số Kw hợp lệ");
    }
    resultBai2.innerHTML = `Họ Tên: ${hoTen}. Tiền Điện: ${Intl.NumberFormat('vn-VN').format(tienDien)} VND`
}

//bài 3 
/**
 */
function tinhTienThue(){
    var hoTen = document.getElementById("ho-ten-bai3").value;
    var thuNhap = document.getElementById("thu-nhap").value*1;
    var nguoiPhuThuoc = document.getElementById("nguoi-phu-thuoc").value*1;
    var result = document.getElementById("resultBai3");
    if( nguoiPhuThuoc < 0){
        alert("Vui lòng nhập số hợp lệ");
    } 
    var tongThuNhap = thuNhap - 4e6 - 16e5*nguoiPhuThuoc;
    var tienThue = 0;
    if(0 <tongThuNhap && tongThuNhap <=6e7){
        tienThue= tongThuNhap*0.05;
    }
    else if( tongThuNhap > 6e7 && tongThuNhap <= 12e7){
        tienThue= tongThuNhap*0.10;
    }
    else if(tongThuNhap > 12e7 && tongThuNhap <= 21e7){
       tienThue=  tongThuNhap*0.15;
    }
    else if(tongThuNhap > 21e7 && tongThuNhap <= 384e6){
       tienThue=  tongThuNhap*0.2;
    }
    else if(tongThuNhap > 384e6 && tongThuNhap <= 624e6){
       tienThue=  tongThuNhap*0.25;
    }
    else if(tongThuNhap > 624e6 && tongThuNhap <= 96e7){
       tienThue=  tongThuNhap*0.3;
    }
    else if(tongThuNhap > 96e7){
       tienThue = tongThuNhap*0.35;
    }
    else{
        alert("Số tiền nhập không hợp lệ");

    }
    result.innerHTML = `Họ Tên: ${hoTen}. Tiền Thuế: ${Intl.NumberFormat('vn-VN').format(tienThue)} VND`

    

}
// bài 4
/**
 */
var khachhang = function(){
    var loaiKhachHang = document.querySelector("#loai-khach-hang").value;
    var sknInput = document.getElementById("so-ket-noi");
    if(loaiKhachHang == DOANH_NGHIEP){
      sknInput.style.display="block";
    }else{
        sknInput.style.display ="none";
    }
}
function tinhTienCap(){
    var loaiKhachHang =document.querySelector("#loai-khach-hang").value;
    var maKhachhang =document.getElementById("ma-khach-hang").value;
    var soKenh = document.getElementById("so-kenh").value*1;
    var soKetNoi = document.getElementById("so-ket-noi").value*1;
    var result = document.getElementById("resultBai4");
    var tongTienCap = 0;
    switch(loaiKhachHang){
        case NHA_DAN:
        tongTienCap = 4.5 + 20.5 + 7.5*soKenh;
        break;
        case DOANH_NGHIEP:
        soKetNoi <=10 ?
        tongTienCap= 15 + 75 +50*soKenh :
        tongTienCap = 15 + 75 + (soKenh-10)*5 + 50*soKenh;
        break;
        default:
        alert("Vui lòng chọn loại khách hàng");
    }
    console.log("🚀 ~ tinhTienCap ~ tongTienCap:", tongTienCap)

    result.innerHTML= `Mã khách hàng: ${maKhachhang}. Tổng Tiền: ${Intl.NumberFormat("en-US",{
    style: "currency",currency: "USD"}).format(tongTienCap)}`
}
