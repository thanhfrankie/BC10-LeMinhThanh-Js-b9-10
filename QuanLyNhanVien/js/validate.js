

function showMessage(idErr, message) {
    document.getElementById(idErr).innerText = message;
  }
  
  function kiemTraRong(value, idErr) {
    if (value.trim() == "") {
      showMessage(idErr, "Không được để trống");
      return false;
    }
    showMessage(idErr, "");
    return true;
  }
  
  function kiemTraTrung(value, arr, idErr) {
    // findIdnex w3
  
    var index = arr.findIndex(function (item) {
      return item.tk == value;
    });
    if (index != -1) {
      showMessage(idErr, "Nội dung đã bị trùng");
      return false;
    }
    showMessage(idErr, "");
    return true;
  }
  
  function kiemTraEmail(valueEmail) {
    // regex
    console.log("yes email");
  
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(valueEmail)) {
      showMessage("tbEmail", "");
      return true;
    }
    showMessage("tbEmail", "Email không hợp lệ");
    return false;
  }
  