dsnv = []
function renderDSNV() {
    var contentHTMl = ""
    for (var i = 0; i < dsnv.length; i++) {
        var data = dsnv[i]
        var trString = `

        
        `
    }
}
function themNhanVien() {
    var tk = document.getElementById("tknv").value
    var ten = document.getElementById("name").value
    var email = document.getElementById("tbEmail").value
    var password = document.getElementById("password").value
    var ngaylam = document.getElementById("datepicker").value
    var luongCB = document.getElementById("tbLuongCB").value
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