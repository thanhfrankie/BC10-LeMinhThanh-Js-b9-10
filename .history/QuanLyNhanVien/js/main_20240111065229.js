var dsnv = [];
var dataJson = localStorage.getItem("dsnv");
console.log("JSON", dataJson); // này lúc đầu nó chưa có local nên là nó lỗi
dsnv = JSON.parse(dataJson) || []; 
// duyệt mảng => convert object => object từ class
for (var i = 0; i < arraySv.length; i++) {
  var data = arraySv[i];
  var sv = new SinhVien(
    arraySv[i].ma,
    arraySv[i].ten,
    arraySv[i].matKhau,
    arraySv[i].email,
    arraySv[i].diemToan,
    arraySv[i].diemLy,
    arraySv[i].diemHoa
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
