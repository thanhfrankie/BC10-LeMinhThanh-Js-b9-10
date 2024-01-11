var dsnv = [];
var dataJson = localStorage.getItem("dsnv");
console.log("JSON", dataJson);
var arrayNv = JSON.parse(dataJson) || []; 
// duyệt mảng => convert object => object từ class
for (var i = 0; i < arrayNv.length; i++) {
  var data = arrayNv[i];
  var sv = new SinhVien(
    arrayNv[i].tk,
    arrayNv[i].ten,
    arrayNv[i].password,
    arrayNv[i].email,
    arrayNv[i].ngayLam,
    arrayNv[i].luongCB,
    arrayNv[i].chucVu,
    arrayNv[i].gioLam
  );
  dssv.push(sv);
}
renderDSNV();
function renderDSNV() {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var data = dsnv[i];
    var trString = `
        <tr>
                        <td>${data.tk}</td>
                        <td>${data.ten}</td>
                        <td>${data.email}</td>
                        <td>${data.ngayLam}</td>
                        <td>${data.chucVu}</td>
                        <td>${data.luongCB}</td>
        </tr>
        `;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function themNguoiDung() {
var nv = layThongTinTuForm()

  if (chucVu === "Sếp") {
    tongLuong = luongCB * 3;
  }

  if (chucVu === "Trưởng phòng") {
    tongLuong = luongCB * 2;
  }
  if (chucVu === "Nhân viên") {
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
  dsnv.push(nv);
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
