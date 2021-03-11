export const username = /^[a-z]{1}[a-z0-9]{3,15}$/;
export const names = /^[a-zA-Z]{3,}([\s][a-zA-Z0-9]+)*$/;
export const email = /^[a-z]+[a-z0-9_]*@[a-z]+[a-z0-9]+[.][a-z]{2,}$/;
export const telephoneNumber = /^[+][\d]{10,16}$/;
export const cardIdNumber = /^[\d]{6,9}$/;
export const url = /^https?:[/][/][a-zA-Z0-9]+([a-zA-Z0-9-.]+)+[/#?]?.*$/;
export const userId = /^Users[/][a-z0-9_]{3,}$/;
export const digits = /^[\d]+$/
