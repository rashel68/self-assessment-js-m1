function centimeterTOmeter(centi) {
    let dividedCenti = 100;
    const meter = centi / dividedCenti;
    return meter;
}

let centimeterInput = 150;

const meterOutput = centimeterTOmeter(centimeterInput);
console.log(centimeterInput, 'Centimeter = ', meterOutput, 'Meter');