function layThongTinTuForm() {
    var tk = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("tbEmail").value;
    var password = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("tbLuongCB").value * 1;
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
      chucVu: chucVu,
      gioLam: gioLam,
    };
}