function NhanVien(
  tk,
  ten,
  email,
  password,
  ngayLam,
  luongCB,
  selectChucvu,
  tongLuong,
  gioLam,
  xepLoai,
) {
  this.tk = tk;
  this.ten = ten;
  this.email = email;
  this.password = password;
  this.ngayLam = ngayLam;
  this.luongCB = luongCB;
  this.selectChucvu = selectChucvu;
  this.tongLuong = function () {
    if (this.selectChucvu === "Sếp") {
      tongLuong = luongCB * 3;
      return tongLuong;
    }
    if (this.selectChucvu === "Trưởng phòng") {
      tongLuong = luongCB * 2;
      return tongLuong;
    }
    if (this.selectChucvu === "Nhân viên") {
      tongLuong = luongCB * 1;
      return tongLuong;
    }
  };
  this.gioLam = gioLam;
  this.xepLoai = function () {
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
  };
}
