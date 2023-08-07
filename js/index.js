// BÀI TẬP 1
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    inputSalary: lương 1 ngày
    inputDayWork: số ngày làm
    totalSalary: inputSalary * inputDayWork
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến inputDayWork, inputSalary, totalSalary
    B2: Gán giá trị cho biến inputDayWork, inputSalary
    B3: Tính lương: totalSalary = inputDayWork * inputSalary
    B4: In kết quả totalSalary ra HTML
*/

// Khối 3: Output
/*
    totalSalary
*/

document.getElementById("tinh").onclick = function tinh(){
    var inputSalary = +document.getElementById("inputSalary").value;
    var inputDayWork = +document.getElementById("inputDayWork").value;
    
    var totalSalary = inputSalary * inputDayWork
    totalSalary = totalSalary.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

    document.querySelector(".result__salary").innerHTML = `Tổng lương: ${totalSalary}`;
}

// BÀI TẬP 2
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    number 1: số 1
    number 2: số 2
    number 3: số 3
    number 4: số 4
    number 5: số 5
    average
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến number1, number2, number3, number4, number5, average
    B2: Gán giá trị cho biến number1, number2, number3, number4, number5
    B3: Tính trung bình: (number1 + number2 + number3 + number4 + number5) /5
    B4: In kết quả average ra HTML
*/

// Khối 3: Output
/*
    average: giá trị trung bình
*/

document.getElementById("tinhTB").onclick = function tinhTB(){
    var number1 = +document.getElementById("inputNumber1").value;
    var number2 = +document.getElementById("inputNumber2").value;
    var number3 = +document.getElementById("inputNumber3").value;
    var number4 = +document.getElementById("inputNumber4").value;
    var number5 = +document.getElementById("inputNumber5").value;

    var average = (number1 + number2 + number3 + number4 + number5) /5

    document.querySelector(".result__average").innerHTML = `Giá trị trung bình là: ${average}`
}

// BÀI TẬP 3
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    Nhập giá tiền cần đổi
    moneyVND: 23500
    moneyUSD
    convertUSDToVND
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến moneyUSD, convertUSDToVND, moneyVND
    B2: Gán giá trị cho biến moneyUSD, moneyVND
    B3: Tính quy đổi tiền: convertUSDToVND = moneyVND * moneyUSD
    B4: In kết quả convertUSDToVND ra HTML
*/

// Khối 3: Output
/*
    convertUSDToVND: quy đổi tiền
*/

document.getElementById("quyDoi").onclick = function quyDoi(){
    const moneyVND = 23500;
    var moneyUSD = +document.getElementById("moneyUSD").value;

    var convertUSDtoVND = moneyUSD * moneyVND
    convertUSDtoVND = convertUSDtoVND.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

    document.querySelector(".result__convert").innerHTML = `Số tiền đã quy đổi: ${convertUSDtoVND}`;
}

// BÀI TẬP 4
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    Nhập chiều dài, chiều rộng
    inputCD, inputCR
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến inputCD, inputCR, chuVi, dienTich
    B2: Gán giá trị cho biến inputCD, inputCR
    B3: Tính chu vi: chuVi = (inputCD + inputCR) * 2
        Tính diện tích: dienTich = inputCD * inputCR

    B4: In kết quả chuVi, dienTich ra HTML
*/

// Khối 3: Output
/*
    chuVi: chu vi
    dienTich: diện tích
*/

document.getElementById("tinhToan").onclick = function tinhToan() {
    var inputCD = +document.getElementById("inputCD").value;
    var inputCR = +document.getElementById("inputCR").value;

    var chuVi = 0, dienTich = 0;

    chuVi = (inputCD + inputCR) * 2
    dienTich = inputCD * inputCR

    document.querySelector(".result__rectangle").innerHTML = `Chu vi hình chữ nhật là: ${chuVi} <br> Diện tích hình chữ nhật là: ${dienTich}`
}

// BÀI TẬP 5: Tổng 2 ký số
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    inputNumber: Nhập số nguyên
    total2Number: tổng 2 số
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến inputNumber, total2Number
    B2: Gán giá trị cho biến inputNumber
    B3: Tính tổng 2 ký số: total2Number = inputNumber % 10 + Math.floor(inputNumber / 10)
    B4: In kết quả total2Number ra HTML
*/

// Khối 3: Output
/*
    total2Number
*/

document.getElementById("tinhTong").onclick = function tinhTong() {
    var inputNumber = +document.getElementById("inputNumber").value;

    var total2Number = 0;

    total2Number = inputNumber % 10 + Math.floor(inputNumber / 10);

    document.querySelector(".result__totalNumber").innerHTML = `Tổng 2 ký số ${inputNumber} là: ${total2Number}`;
}