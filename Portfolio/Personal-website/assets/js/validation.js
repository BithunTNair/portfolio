const checkName = () => {
    const nameval = document.getElementById('name').value;
    let reg = /^[a-zA-Z\. ]+$/
    if (reg.test(nameval)) {
        document.getElementById('warning').style.display = 'none';

    } else {

        document.getElementById('warning').style.color = "red";
        document.getElementById('warning').style.display = "block";
        document.getElementById('warning').innerText = "Enter a valid Name !";

    }
}
const checkEmail = () => {
    const emailval = document.getElementById('email').value;
    let checkmail = /^([a-zA-Z0-9\.-]+@([a-zA-Z-]{2,20}).([a-zA-Z]{2,6})(\.[a-zA-Z]{2,6}))?$/
    if (checkmail.test(emailval)) {
        document.getElementById('warning2').style.display = 'none';
    } else {
        document.getElementById('warning2').style.color = "red";
        document.getElementById('warning2').style.display = "block";
        document.getElementById('warning2').innerText = "Enter a valid email !";
    }
}

const checkNumber = () => {
    const numberval = document.getElementById('mobile').value;
    let checkNum = /^[5-9]{1}[0-9]{9}$/
    if (checkNum.test(numberval)) {
        document.getElementById('warning3').style.display = 'none';
    } else {
        document.getElementById('warning3').style.color = "red";
        document.getElementById('warning3').style.display = "block";
        document.getElementById('warning3').innerText = "Enter a Valid Mobile Number !";
    }
}

