// create utility functions here.

/* vou (value or undefined) if true then value else undefined */
export const vou = <T>(condition: boolean | undefined | null, value: T) =>
  condition ? value : undefined;

/* true or false */
export const tof = (condition: boolean | undefined | null): boolean =>
  condition ? true : false;
/* spread if true */
export const sit = <T>(condition: boolean | undefined | null, object: T) =>
  condition ? object : {};

/* zero if undefined */
export const ziu = (value: number | undefined | null | string) =>
  value ? +value : 0;
/* helper function for checking type of keys of keyValue */
export const hasKey = <O>(obj: O, key: keyof any): key is keyof O => {
  return key in obj}