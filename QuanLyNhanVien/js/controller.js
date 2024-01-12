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
                        <td>${data.selectChucvu}</td>
                        <td>${data.tongLuong()}</td>
                        <td>${data.xepLoai()}</td>
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
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value * 1;
  var selectChucvu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;
  var nv = {
    tk: tk,
    ten: ten,
    email: email,
    password: password,
    ngayLam: ngayLam,
    luongCB: luongCB,
    selectChucvu: selectChucvu,
    gioLam: gioLam,

    tongLuong: function () {
      var tongLuong = 0;

      if (selectChucvu === "Sếp") {
        tongLuong = luongCB * 3;
        return tongLuong;
      }
      if (selectChucvu === "Trưởng phòng") {
        tongLuong = luongCB * 2;
        return tongLuong;
      }
      if (selectChucvu === "Nhân viên") {
        tongLuong = luongCB * 1;
        return tongLuong;
      }
    },
    xepLoai: function () {
      var xepLoai = "";

      if (gioLam >= 192) {
        xepLoai = `Nhân viên xuất sắc`;
        return xepLoai;
      } else if (gioLam >= 176) {
        xepLoai = `Nhân viên giỏi`;
        return xepLoai;
      } else if (gioLam >= 160) {
        xepLoai = `Nhân viên khá`;
        return xepLoai;
      } else {
        xepLoai = `Nhân viên trung bình`;
        return xepLoai;
      }
    },
  };
  return nv;
}
