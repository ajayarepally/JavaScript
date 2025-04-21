function trafficsignal(color) {
    document.getElementById('red').style.backgroundColor = 'gray';
    document.getElementById('yellow').style.backgroundColor = 'gray';
    document.getElementById('green').style.backgroundColor = 'gray';

    document.getElementById(color).style.backgroundColor = color;
}
