import {
  isCardIdNumber,
  isDatetimeString, isDigits, isEmail,
  isEmpty, isGreater, isGreaterEqual, isLess, isLessEqual, isNames,
  isNotEmpty,
  isString,
  isTelephoneNumber,
  isUrl,
  isUserId,
  isUsername
} from './validate';

export const notEmpty = (
  msg: string
): ((value: string) => boolean | string) => {
  return value => isNotEmpty(value) || msg;
};

export const minLength = (
  msg: string,
  length: number
): ((value: string) => boolean | string) => {
  return value => {
    if (isEmpty(value)) return msg;

    if (!isString(value)) return msg;

    return value.length >= length || msg;
  };
};

export const maxLength = (
  msg: string,
  length: number
): ((value: string) => boolean | string) => {
  return value => {
    if (isEmpty(value)) return true;

    return value.length <= length || msg;
  };
};

export const username = (
  msg: string
): ((value: string) => boolean | string) => {
  return value => isUsername(value) || msg;
};

export const names = (msg: string): ((value: string) => boolean | string) => {
  return value => {
    return isNames(value) || msg;
  };
};

export const email = (msg: string): ((value: string) => boolean | string) => {
  return value => isEmail(value) || msg;
};

export const usernameOrEmail = (
  msg: string
): ((value: string) => boolean | string) => {
  return value => isUsername(value) || isEmail(value) || msg;
};

export const telephoneNumber = (
  msg: string
): ((value: string) => boolean | string) => {
  return value => isTelephoneNumber(value) || msg;
};

export const cardIdNumber = (
  msg: string
): ((value: string) => boolean | string) => {
  return value => isCardIdNumber(value) || msg;
};

export const url = (msg: string): ((value: string) => boolean | string) => {
  return value => isUrl(value) || msg;
};

export const userId = (msg: string): ((value: string) => boolean | string) => {
  return value => isUserId(value) || msg;
};

export const datetimeString = (
  msg: string
): ((value: string) => boolean | string) => {
  return value => isDatetimeString(value) || msg;
};

export const digits = (msg: string): ((value: string) => boolean | string) => {
  return value => isDigits(value) || msg;
};

export const greaterEqual = (msg: string, compare: number): ((value: string) => boolean | string) => {
  return value => isGreaterEqual(value, compare) || msg;
};

export const greater = (msg: string, compare: number): ((value: string) => boolean | string) => {
  return value => isGreater(value, compare) || msg;
};

export const lessEqual = (msg: string, compare: number): ((value: string) => boolean | string) => {
  return value => isLessEqual(value, compare) || msg;
};

export const less = (msg: string, compare: number): ((value: string) => boolean | string) => {
  return value => isLess(value, compare) || msg;
};
