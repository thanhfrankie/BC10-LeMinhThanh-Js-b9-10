var dsnv = [];
// var dataJson = localStorage.getItem("dsnv");
// console.log("JSON", dataJson); // này lúc đầu nó chưa có local nên là nó lỗi
// dsnv = JSON.parse(dataJson);
// v sao hôm kia a Sỹ dạy là viết đoạn này lên trên dc a
// lấy data từ localStorage => render lên layout
var dataJson = localStorage.getItem("dsnv");
var arrayNv = JSON.parse(dataJson);
// tạo class SinhVien

// duyệt mảng => convert object => object từ class
for (var i = 0; i < arrayNv.length; i++) {
  var data = arrayNv[i];
  var nv = {
    tk: data.tk,
    ten: data.ten,
    email: data.email,
    password: data.password,
    ngayLam: data.ngayLam,
    luongCB: data.luongCB,
    chucVu: data.chucVu,
    gioLam: data.gioLam,
  };
  // var sv = new SinhVien(
  //   arrayNv[i].ma,
  //   arrayNv[i].ten,
  //   arrayNv[i].matKhau,
  //   arrayNv[i].email,
  //   arrayNv[i].diemToan,
  //   arrayNv[i].diemLy,
  //   arrayNv[i].diemHoa
  // );
  dsnv.push(sv);
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
  var tk = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("tbEmail").value;
  var password = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("tbLuongCB").value * 1;
  var chucVu = document.getElementById("tbChucVu").value;
  var gioLam = document.getElementById("tbGiolam").value * 1;
  var nv = {
    tk: tk,
    ten: ten,
    email: email,
    password: password,
    ngayLam: ngayLam,
    luongCB: luongCB,
    chucVu: chucVu,
    gioLam: gioLam,
  };
  dsnv.push(nv);
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);
  renderDSNV();
}
