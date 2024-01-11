var dsnv = [];
var dataJson = localStorage.getItem("dsnv");
console.log("JSON", dataJson); // này lúc đầu nó chưa có local nên là nó lỗi
dsnv = JSON.parse(dataJson) || []; // trường hợp nó ko có thì sẽ trả về mảng rỗng, dạ, v la xong r dung k a
// v sao hôm kia a Sỹ dạy là viết đoạn này lên trên dc a
// ukm khúc đó nó hơi thíu xíu tại nó có local rồi nên nó vẫn đọc đc bình thường
// fix lại thì dề thui
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
var nv = new nhanVien()

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
