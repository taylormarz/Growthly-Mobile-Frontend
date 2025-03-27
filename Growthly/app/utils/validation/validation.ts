// global validation done in this file

// validation for empty fields
export const isNotBlank = (value: any): boolean => {
	if (typeof value === 'string') {
	  return value.trim().length > 0;
	}
  
	if (typeof value === 'number') {
	  return !isNaN(value);
	}
  
	return !!value;
};

// validates sin number
export const isValidSIN = (value: string): boolean => {
	// entered as a string but can't be characters other than #s
	const regex = /^[0-9]{9}$/;
	return regex.test(value);
};

// validates phone number
export const isValidPhone = (value: string): boolean => {
	const regex = /^[0-9]{10}$/;
	return regex.test(value);
};

// validation for strings like fname, lname, etc. Can't have any numbers
export const isValidEntry = (value: string): boolean => {
	const regex = /^[A-Za-z\s]+$/;
	return regex.test(value);
};

// validation for a valid email entry
export const isValidEmail = (value: string): boolean => {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(value);
};

// validation for postal code
export const isValidPostalCode = (value: string): boolean => {
	const regex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
	return regex.test(value);
};
  