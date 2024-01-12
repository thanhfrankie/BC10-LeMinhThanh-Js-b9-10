function NhanVien(
  tk,
  ten,
  email,
  password,
  ngayLam,
  luongCB,
  selectChucvu,
  gioLam,
  xepLoai
) {
  this.tk = tk;
  this.ten = ten;
  this.password = password;
  this.email = email;
  this.ngayLam = ngayLam;
  this.selectChucvu = selectChucvu;
  this.tongLuong = function () {
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
  };
  this.gioLam = gioLam;
  this.xepLoai = function () {
    if (gioLam >= 192) {
      xepLoai = `Nhân viên xuất sắc`;
    } else if (gioLam >= 176) {
      xepLoai = `Nhân viên giỏi`;
    } else if (gioLam >= 160) {
      xepLoai = `Nhân viên khá`;
    } else {
      xepLoai = `Nhân viên trung bình`;
    }
  };
}
