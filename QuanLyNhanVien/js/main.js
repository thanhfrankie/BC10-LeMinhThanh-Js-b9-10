var dsnv = [];
layDuLieuLocal()
renderDSNV(dsnv);

function themNguoiDung() {
  var nv = layThongTinTuForm();
  // var isValid = true;
  // isValid = kiemTraRong(nv.tk, "tbTKNV") && kiemTraTrung(nv.tk, dsnv, "tbTKNV");
  // isValid =
  //   isValid & (kiemTraRong(nv.email, "tbEmail") && kiemTraEmail(nv.email));
  // isValid &= kiemTraRong(nv.ten, "tbTen");
  dsnv.push(nv);
  if (nv.selectChucvu === "Sếp") {
    document.getElementById("tbChucVu").innerText = ` Sếp`;
  }
  if (nv.selectChucvu === "Trưởng phòng") {
    document.getElementById("tbChucVu").innerText = ` Trưởng phòng`;
  }
  if (nv.selectChucvu === "Nhân viên") {
    document.getElementById("tbChucVu").innerText = ` Nhân viên`;
  }
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);
  renderDSNV(dsnv);
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

  renderDSNV(dsnv);
}
function suaNv(id) {
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].tk == id) {
      index = i;
    }
  }
  // từ index => lấy ra sv được click
  var nv = dsnv[index];
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);
  // show thông tin lên form

  document.getElementById("tknv").value = nv.tk;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.password;
  document.getElementById("chucvu").value = nv.selectChucvu;
  document.getElementById("luongCB").value = nv.luongCB;
  document.getElementById("gioLam").value = nv.gioLam;
}
function capNhatNv() {
  var nv = layThongTinTuForm();
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].tk == nv.tk) {
      index = i;
    }
  }
  // cập nhật data tại vị trí index
  dsnv[index] = nv;
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);
  renderDSNV(dsnv);
}
function timKiem(event) {
  console.log("first");
  var filterData = [];
  var searchInput = document.getElementById("searchName");
  var searchTerm = searchInput.value.trim().toLowerCase();
  filterData = dsnv.filter((item) => {
    return item.tk.toLowerCase().includes(searchTerm);
  });
  console.log(filterData);
  renderDSNV(filterData);
}
