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
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
    return str;
}
