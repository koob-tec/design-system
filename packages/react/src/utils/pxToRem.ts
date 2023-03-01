export function pxToRem(value: string) {
	if (value) {
		const px = +value.split('px')[0];

		return  `${px * 0.0625}rem`; 
	}

}