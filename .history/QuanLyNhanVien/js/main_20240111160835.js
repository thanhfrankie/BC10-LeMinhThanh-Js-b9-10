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
  var xep
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
    xepLoai.innerHTML = ` Nhân viên xuất sắc`;
  } else if (gioLam >= 176) {
    xepLoai.innerHTML = ` Nhân viên giỏi`;
  } else if (gioLam >= 160) {
    xepLoai.innerHTML = ` Nhân viên khá`;
  } else {
    xepLoai.innerHTML = ` Nhân viên trung bình`;
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
