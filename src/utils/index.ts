// create utility functions here.

/* vou (value or undefined) if true then value else undefined */
export const vou = <T>(condition: boolean | undefined | null, value: T) =>
  condition ? value : undefined;

/* true or false */
export const tof = (condition: boolean | undefined | null): boolean =>
  condition ? true : false;
