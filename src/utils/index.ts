// create utility functions here.

/* vou (value or undefined) if true then value else undefined */
export const vou = <T>(condition: boolean | undefined | null, value: T) =>
  condition ? value : undefined;
