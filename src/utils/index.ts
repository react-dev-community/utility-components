// create utility functions here.

/* vou (value or undefined) if true then value else undefined */
export const vou = <T>(condition: boolean | undefined | null, value: T) =>
  condition ? value : undefined;

/* spread if true */
export const sit = <T>(condition: boolean | undefined | null, object: T) =>
  condition ? object : {};

/* zero if undefined */
export const ziu = (value: number | undefined | null | string) =>
  value ? +value : 0;
