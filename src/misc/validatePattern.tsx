export function validateExpiryDatePattern(str: any): boolean {
    const pattern = /^\d{4}-(0[1-9]|1[0-2])$/;
    return pattern.test(str);
  }