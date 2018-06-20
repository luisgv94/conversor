const factorLibaKg = 0.453592
const factorKgaLib = 2.20462

export default function converter(opcion = 'kg' ,peso){

	let conversion 

	if(opcion == 'kg'){
		conversion = peso * factorKgaLib
		console.log(`${peso} kg equivale a ${conversion} libras. `)
	}else if(opcion == 'lb') {
		conversion = peso * factorLibaKg
		console.log(`${peso} libras equivale a ${Math.round(conversion)} Kg. `)
	}else{
		console.log("El valor ingresado no es correcto, Intente de nuevo")
	}
	

}