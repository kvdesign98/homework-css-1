// W1
function tuoi(old) {
    if (old) {
        if (old > 18) {
            old = true;
            alert(old);
        }
        else {
            old = false;
            alert(old);
        }
    }
    else {
        alert("không có tuổi được nhập vào")
    }
    return old;
}


function tuoi(old) {
    return old = (old > 18) ? alert(old = true) : alert(old = false)
}


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
function checkAge(age) {
    return age = (age > 18) ? alert(age = true) : alert('Did parents allow you?')
}
function checkAge(age) {
    return age = (age > 18)|| confirm('Did parents allow you?')
}
// W2
function min(a, b) {
    if (a, b) {
        if (a < b || b < a) {
            if (a < b) {
                console.log(a)
            } else {
                console.log(b)
            }
        }
    }
    else {
        alert("Không có a,b")
    }
}

// W3
ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

// W4

let dangNhap = prompt("Yêu Cầu Đăng Nhập")

if (dangNhap == "Admin") {
    matKhau = prompt("hãy nhập mật khẩu")
    if (matKhau == "cafedev") {
        alert("Chào Mừng")
    }
    else if (matKhau != "cafedev") {
        alert("Mật khẩu sai")
    }
    else if (matKhau == "" || "esc") {
        alert("Đã hủy")
    }
}
else if (dangNhap == "" || "esc") {
    alert("Canceled")
}
else {
    alert("Tôi không biết bạn")
}