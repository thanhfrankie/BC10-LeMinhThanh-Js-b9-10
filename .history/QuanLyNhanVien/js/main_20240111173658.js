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
    arrayNv[i].selectChucvu,
    arrayNv[i].gioLam
  );
  dsnv.push(sv);
}
renderDSNV();
function themNguoiDung() {
  var nv = layThongTinTuForm();
  dsnv.push(nv);
  // em ko biết sao cái ô email lại nhận giá trị của ô password trong khi em ko show lên a @@
  if (nv.selectChucvu === "Sếp") {
    document.getElementById("tbChucVu").innerText = ` Sếp`;
  }
  if (nv.selectChucvu === "Trưởng phòng") {
    document.getElementById("tbChucVu").innerText = ` Trưởng phòng`;
  }
  if (nv.selectChucvu === "Nhân viên") {
    document.getElementById("tbChucVu").innerText = ` Nhân viên`;
  }
 
  console.log(nv.gioLam)
  if (nv.gioLam >= 192) {
    xepLoai = `Nhân viên xuất sắc`;
  } else if (nv.gioLam >= 176) {
    xepLoai = `Nhân viên giỏi`;
  } else if (nv.gioLam >= 160) {
    xepLoai = `Nhân viên khá`;
  } else {
    xepLoai = `Nhân viên trung bình`;
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
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);
  renderDSNV();
}
function suaNv(id) {
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].tk == id) {
      index = i;
    }
  }
  // từ index => lấy ra sv được click
  var nv = dsnv[index];
  // show thông tin lên form
  document.getElementById("tknv").value = nv.tk;
  document.getElementById("name").value = nv.ten;
  document.getElementById("tbEmail").value = nv.email;
  document.getElementById("tbChucVu").value = nv.chucVu;
  document.getElementById("tbLuongCB").value = nv.luongCB;
}
function capNhatNv() {
  var nv = layThongTinTuForm();
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].tk == nv.tk) {
      index = i;
    }
  }
  // cập nhật data tại vị trí index
  dsnv[index] = nv;
  renderDSNV();
}
