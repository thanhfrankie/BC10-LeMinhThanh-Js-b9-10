dsnv = []
var dataJson = localStorage.getItem("dsnv")
dsnv = JSON.parse(dataJson)
renderDSNV()
function renderDSNV() {
    var contentHTML = ""
    for (var i = 0; i < dsnv.length; i++) {
        var data = dsnv[i]
        var trString = `
        <tr>
                        <td>${data.ma}</td>
                        <td>${data.ten}</td>
                        <td>${data.email}</td>
                        <td>${data.tinhDTB().toFixed(2)}</td>
                        <td>
                        <button
                        onclick="xoaSv('${data.ma}')"
                        class='btn btn-danger'>Delete</button>
                        <button
                        onclick="suaSv('${data.ma}')"
                        class='btn btn-warning'>Edit</button>
                        </td>
                    </tr>
        `
        contentHTML = contentHTML + trString
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function themNguoiDung() {
    var tk = document.getElementById("tknv").value
    var ten = document.getElementById("name").value
    var email = document.getElementById("tbEmail").value
    var password = document.getElementById("password").value
    var ngaylam = document.getElementById("datepicker").value
    var luongCB = document.getElementById("tbLuongCB").value*1
    var chucvu = document.getElementById("tbChucVu").value
    var giolam = document.getElementById("tbGiolam").value * 1
    var nv = {
        tk: tk,
        ten: ten,
        email: email,
        password: password,
        ngaylam: ngaylam,
        luongCB: luongCB,
        chucvu: chucvu,
        giolam: giolam,
    }
    dsnv.push(nv)
    var dataJson = JSON.stringify(dsnv)
    localStorage.setItem("dsnv", dataJson)
    renderDSNV()
}