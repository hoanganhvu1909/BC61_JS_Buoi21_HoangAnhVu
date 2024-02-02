function NhanVien() {
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = '';
    this.chucvu = '';
    this.gioLam = '';
    // Phương thức
    // Tính tổng lương
    this.totalLuong = function () {
        var total = 0;
        // if (this.chucvu == 'Sếp') {
        //     total = this.luongCB * 1 * 3;
        // } else if (this.chucvu == 'Trưởng phòng') {
        //     total = this.luongCB * 1 * 1.5;
        // } else if (this.chucvu == 'Nhân viên') {
        //     total = this.luongCB * 1;
        // }
        switch (this.chucvu) {
            case 'Sếp':
                total = this.luongCB * 1 * 3;
                break;
            case 'Trưởng phòng':
                total = this.luongCB * 1 * 1.5;
                break;
            case 'Nhân viên':
                total = this.luongCB * 1;
                break;
            default:
        }
        // Format đơn vị tiền tệ:
        var formattotalLuong = total.toLocaleString({
            style: 'currency',
            currency: 'VND',
        });
        return formattotalLuong;
    };
    // Xếp loại
    this.xepLoai = function () {
        var xepLoai = '';
        // if (this.gioLam >= 192) {
        //     xepLoai = 'Xuất sắc';
        // } else if (this.gioLam >= 176 && this.gioLam < 192) {
        //     xepLoai = 'Giỏi';
        // } else if (this.gioLam >= 160 && this.gioLam < 176) {
        //     xepLoai = 'Khá';
        // } else {
        //     xepLoai = 'Trung bình';
        // }
        switch (true) {
            case this.gioLam >= 192:
                xepLoai = 'Xuất sắc';
                break;
            case this.gioLam >= 176:
                xepLoai = 'Giỏi';
                break;
            case this.gioLam >= 160:
                xepLoai = 'Khá';
                break;
            default:
                xepLoai = 'Trung bình';
                break;
        }
        return xepLoai;
    };
}
