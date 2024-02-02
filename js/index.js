//------------ Thêm nhân viên----------------
var arrNhanVien = [];

document.getElementById('btnThemNV').onclick = function () {
    var arrInput = document.querySelectorAll('#formQLNV input, #formQLNV select');
    // console.log(arrInput);
    var nhanVien = new NhanVien();
    for (var index = 0; index < arrInput.length; index++) {
        // console.log(arrInput[index].value);
        var id = arrInput[index].id;
        nhanVien[id] = arrInput[index].value;
    }
    // console.log(nhanVien);
    arrNhanVien.push(nhanVien);
    // console.log(arrNhanVien);
    // Lưu trữ dữ liệu
    saveLocalStorage('arrNhanVien', arrNhanVien);
    renderNhanVien();
    // Clear dữ liệu Input trong thẻ form
    document.getElementById('formQLNV').reset();
};
function renderNhanVien(arr) {
    // 1. Truy cập tới mảng nhân viên được thêm vào
    // 2. Xử lý duyệt mảng, tạo các chuỗi html
    if (!arr) {
        arr = arrNhanVien;
    }
    var content = '';
    for (var index = 0; index < arr.length; index++) {
        var nhanVien = arr[index];
        // console.log(nhanVien);
        // Tạo một đối tượng mới để đối tượng có phương thức tính tổng lương
        var newNhanVien = new NhanVien();
        console.log(newNhanVien);
        Object.assign(newNhanVien, nhanVien);
        console.log(newNhanVien);
        var stringHtml = `
        <tr>
        <td>${newNhanVien.tknv}</td>
        <td>${newNhanVien.name}</td>
        <td>${newNhanVien.email}</td>
        <td>${newNhanVien.datepicker}</td>
        <td>${newNhanVien.chucvu}</td>
        <td>${newNhanVien.totalLuong()}</td>
        <td>${newNhanVien.xepLoai()}</td>
        <td>
        <button onclick="deleteNhanVien('${
            newNhanVien.tknv
        }')" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
        </td>
        <td>
        <button onclick="getInfoNhanVien('${
            newNhanVien.tknv
        }')" class="btn btn-info"><i class="fa-solid fa-pencil"></i></button>
        </td>
        </tr>
        `;
        content += stringHtml;
    }
    // Đưa các phần tử hiển thị lên table
    document.getElementById('tableDanhSach').innerHTML = content;
}
// --------Hàm lưu trữ dữ liệu lên localStorage------------------
function saveLocalStorage(key, value) {
    // Chuyển đổi dữ liệu về thành chuỗi JSON
    var stringJson = JSON.stringify(value);
    // Sử dụng setItem để lưu trữ
    localStorage.setItem(key, stringJson);
}
// ----------------------Lấy dữ liệu-----------------------------
function getLocalStorage(key) {
    var dataLocal = localStorage.getItem(key);
    // Kiểm tra dữ liệu dataLocal có không
    if (dataLocal) {
        var newData = JSON.parse(dataLocal);
        // console.log(newData);
        arrNhanVien = newData;
        renderNhanVien(newData);
    }
}
getLocalStorage('arrNhanVien');
// ----------------Xoá dữ liệu----------------------------------
function deleteNhanVien(tknv) {
    for (var index = 0; index < arrNhanVien.length; index++) {
        // console.log(arrSinhVien);
        if (tknv == arrNhanVien[index].tknv) {
            console.log(index);
            // Sử dụng hàm splice để xoá một phần tử khỏi mảng
            arrNhanVien.splice(index, 1);
        }
    }
    renderNhanVien();
    saveLocalStorage('arrNhanVien', arrNhanVien);
}
// function deleteNhanVien(tknv) {
//     var viTri = arrNhanVien.findIndex(function (nhanVien) {
//         return nhanVien.tknv;
//     });
//     if (viTri !== -1) {
//         arrNhanVien.splice(viTri, 1);
//         renderNhanVien();
//         saveLocalStorage('arrNhanVien', arrNhanVien);
//     }
// }
// --------------Cập nhật nhân viên---------------------
function getInfoNhanVien() {}
function updateNhanVien() {}