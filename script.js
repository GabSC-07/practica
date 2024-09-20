document.getElementById('validateDNI').addEventListener('click', function() {
    var dniNumber = document.getElementById('dniNumber').value;
    var dniLetter = document.getElementById('dniLetter').value.toUpperCase();
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (dniNumber < 0 || dniNumber > 99999999) {
        alert('El número proporcionado no es válido');
    } else {
        var calculatedLetter = letras[dniNumber % 23];
        if (calculatedLetter !== dniLetter) {
            alert('La letra que ha indicado no es correcta');
        } else {
            alert('El número y la letra de DNI son correctos');
        }
    }
});
