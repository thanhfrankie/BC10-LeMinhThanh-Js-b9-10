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
  var tk = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("tbEmail").value;
  var password = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("tbLuongCB").value * 1;
  var chucVu = document.getElementById("tbChucVu").value;
  var gioLam = document.getElementById("tbGiolam").value * 1;
  var tongLuong = 
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
  if (chucVu === "Sếp") {

  }
    
  if (chucVu === "Trưởng phòng") {
    
  }
  if (chucVu === "Nhân viên") {
    
  }
  renderDSNV();
}
