import {
  cardIdNumber, email, names,




  telephoneNumber, url,
  userId, username
} from 'src/helpers/regex';
import { digits } from './regex';

export const isString = (value: unknown): boolean => typeof value === 'string';

export const isStringEmpty = (value: unknown): boolean => value === '';

export const isNull = (value: unknown): boolean => value === null;

export const isUndefined = (value: unknown): boolean =>
  typeof value === 'undefined';

export const isEmpty = (value: unknown): boolean => !isNotEmpty(value);

export const isNotEmpty = (value: unknown): boolean =>
  !isNull(value) && !isUndefined(value) && !isStringEmpty(value);

export const isUsername = (value: string): boolean => {
  return username.test(value);
};

export const isNames = (value: string): boolean => {
  return names.test(value);
};

export const isEmail = (value: string): boolean => {
  return email.test(value);
};

export const isTelephoneNumber = (value: string): boolean => {
  return telephoneNumber.test(value);
};

export const isCardIdNumber = (value: string): boolean => {
  return cardIdNumber.test(value);
};

export const isUrl = (value: string): boolean => {
  return url.test(value);
};

export const isUserId = (value: string): boolean => {
  return userId.test(value);
};

export const isDatetimeString = (value: string): boolean => {
  return !isNaN(Date.parse(value));
};

export const isDigits = (value: string): boolean => {
  return digits.test(value);
};

export const isGreaterEqual = (value: string, compare: number): boolean => {
  return parseFloat(value) >= compare;
}

export const isGreater = (value: string, compare: number): boolean => {
  return parseFloat(value) > compare;
}

export const isLessEqual = (value: string, compare: number): boolean => {
  return parseFloat(value) <= compare;
}

export const isLess = (value: string, compare: number): boolean => {
  return parseFloat(value) < compare;
}
