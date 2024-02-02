// Kiểm tra không cho nhập rỗng
function checkEmptyValue(value, idSpan) {
    // Xử lí dữ liệu để kiểm tra xem có rỗng hay không
    var eleSpan = document.getElementById(idSpan);
    if (value == '') {
        // Đưa lên giao diện đoạn thông báo
        eleSpan.style.display = 'block';
        eleSpan.innerHTML = 'Vui lòng không bỏ trống';
        return false;
    } else {
        eleSpan.innerHTML = '';
        return true;
    }
}
function checkNumberValue(value, idSpan) {
    const regexTknv = /^[0-9]{4,6}$/;
    // var isValid = value.match(regexTknv);
    var isValid = regexTknv.test(value);
    console.log(isValid);
    if (isValid) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Tài khoản từ 4 -6 số';
        return false;
    }
}
function checkNameValue(value, idSpan) {
    const regexName =
        /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
    var isValid = regexName.test(value);
    console.log(isValid);
    if (isValid) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Tên không đúng định dạng';
        return false;
    }
}

function checkEmailValue(value, idSpan) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var isValid = regexEmail.test(value);
    console.log(isValid);
    if (isValid) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Email không đúng';
        return false;
    }
}
function checkPassValue(value, idSpan) {
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    // var isValid = value.match(regexTknv);
    var isValid = regexPass.test(value);
    console.log(isValid);
    if (isValid) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Mật khẩu không đúng định dạng';
        return false;
    }
}
function checkDateValue(value, idSpan) {
    const regexDate = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // var isValid = value.match(regexTknv);
    var isValid = regexDate.test(value);
    // console.log(isValid);
    if (isValid) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Ngày làm không đúng định dạng';
        return false;
    }
}
function checkLuong(value, idSpan) {
    if (value >= 1000000 && value <= 20000000) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Lương cơ bản 1000000 đến 20000000';
        return false;
    }
}
function checkTime(value, idSpan) {
    if (value >= 80 && value <= 200) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).style.display = 'block';
        document.getElementById(idSpan).innerHTML = 'Số giờ làm 80 - 200 giờ';
        return false;
    }
}
