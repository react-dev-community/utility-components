import { TxtSty } from './../../types/index';

export interface Theme<T = any> {
  color?: {
    primary?: string;
    secondary?: string;
  };
  text?: {
    [P in keyof T]: TxtSty;
  };
  components?: {
    container?: {};
    button?: {};
  };
}
