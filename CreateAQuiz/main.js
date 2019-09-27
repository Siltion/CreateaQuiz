document.getElementById('submit').addEventListener('click', finish);

function finish() {
    let Q1 = document.getElementById('Q1').value.toLowerCase();
    let Q2 = document.getElementById('Q2').value.toLowerCase();
    let Q3 = document.getElementById('Q3').value.toLowerCase();
    let Q4 = document.getElementById('Q4').value.toLowerCase();
    let percent = 0;

    if (Q1 == 'amaru and goyo') {
        document.getElementById('correct1').style.backgroundColor= 'green';
        percent = percent + 1;
    } else {
        document.getElementById('Q1').style.backgroundColor= 'red';
    }
    if (Q2 == 'wind bastion') {
        document.getElementById('correct2').style.backgroundColor= 'green';
        percent = percent + 1;
    } else {
        document.getElementById('Q2').style.backgroundColor= 'red';
    }
    if (Q3 == 'prisma') {
        document.getElementById('correct3').style.backgroundColor= 'green';
        percent = percent + 1;
    } else {
        document.getElementById('Q3').style.backgroundColor= 'red';
    }
    if (Q4 == 'bartlett u') {
        document.getElementById('correct4').style.backgroundColor= 'green';
        percent = percent + 1;
    } else {
        document.getElementById('Q4').style.backgroundColor= 'red';
    }

    if(percent == 4) {
        document.getElementById('resultPercent').innerHTML='100%';
    } else if (percent == 3) {
        document.getElementById('resultPercent').innerHTML='75%';
    } else if (percent == 2) {
        document.getElementById('resultPercent').innerHTML='50%';
    } else if(percent == 1) {
        document.getElementById('resultPercent').innerHTML='25%';
    } else {
        document.getElementById('resultPercent').innerHTML='0%';
    }
}