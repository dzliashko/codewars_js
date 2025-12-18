// should return False for pins with length other than 4 or 6
export function validatePIN(pin) {
    const re = /^(\d{4}|\d{6})$/;
    return re.test(pin);
}
