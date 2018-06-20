'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = converter;
var factorLibaKg = 0.453592;
var factorKgaLib = 2.20462;

function converter() {
	var opcion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kg';
	var peso = arguments[1];


	var conversion = void 0;

	if (opcion == 'kg') {
		conversion = peso * factorKgaLib;
		console.log(peso + ' kg equivale a ' + conversion + ' libras. ');
	} else if (opcion == 'lb') {
		conversion = peso * factorLibaKg;
		console.log(peso + ' libras equivale a ' + Math.round(conversion) + ' Kg. ');
	} else {
		console.log("El valor ingresado no es correcto, Intente de nuevo");
	}
}