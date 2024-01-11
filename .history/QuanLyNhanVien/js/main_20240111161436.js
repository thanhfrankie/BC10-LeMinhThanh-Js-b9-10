var dsnv = [];
var dataJson = localStorage.getItem("dsnv");
console.log("JSON", dataJson);
var arrayNv = JSON.parse(dataJson) || []; 
// duyệt mảng => convert object => object từ class
for (var i = 0; i < arrayNv.length; i++) {
  var data = arrayNv[i];
  var sv = new NhanVien(
    arrayNv[i].tk,
    arrayNv[i].ten,
    arrayNv[i].password,
    arrayNv[i].email,
    arrayNv[i].ngayLam,
    arrayNv[i].luongCB,
    arrayNv[i].chucVu,
    arrayNv[i].gioLam
  );
  dsnv.push(sv);
}

function themNguoiDung() {
var nv = layThongTinTuForm()
  dsnv.push(nv)
 
  var chucVuNv = nv.chucVu
  if (chucVuNv === "Sếp") {
    tongLuong = luongCB * 3;
  }

  if (chucVuNv === "Trưởng phòng") {
    tongLuong = luongCB * 2;
  }
  if (chucVuNv === "Nhân viên") {
    tongLuong = luongCB;
  }
  if (gioLam >= 192) {
    xepLoai = ` Nhân viên xuất sắc`;
  } else if (gioLam >= 176) {
    xepLoai = ` Nhân viên giỏi`;
  } else if (gioLam >= 160) {
    xepLoai = ` Nhân viên khá`;
  } else {
    xepLoai = ` Nhân viên trung bình`;
  }
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);
  renderDSNV();
}
function xoaNv(id) {
  // splice(viTriCanXoa,soLuongCanXoa)
  //   từ id tìm ra index
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].tk == id) {
      index = i;
    }
  }
  dsnv.splice(index, 1);
  renderDSNV();
}
function suaSv(id) {
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  // từ index => lấy ra sv được click
  var sv = dssv[index];
  // show thông tin lên form
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.diemToan;
  document.getElementById("txtDiemLy").value = sv.diemLy;
  document.getElementById("txtDiemHoa").value = sv.diemHoa;
}