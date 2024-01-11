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
                        <td>
                        <button
                        onclick="xoaNv('${data.tk}')"
                        class='btn btn-danger'>Delete</button>
                        <button
                        data-toggle="modal"
								        data-target="#myModal"
                        onclick="suaNv('${data.tk}')"
                        class='btn btn-warning'>Edit</button>
                        </td>
        </tr>
        `;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function layThongTinTuForm() {
  var tk = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("tbEmail").value;
  var password = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("tbLuongCB").value * 1;
  var selectChucvu = document.getElementById("chucvu").value
  var chucVu = document.getElementById("tbChucVu").value;
  var gioLam = document.getElementById("tbGiolam").value * 1;
  var tongLuong = 0;
  var xepLoai = "";
  var nv = {
    tk: tk,
    ten: ten,
    email: email,
    password: password,
    ngayLam: ngayLam,
    luongCB: luongCB,
    selectChucvu: selectChucvu,
    chucVu: chucVu,
    gioLam: gioLam,
  };
  return nv;
}
