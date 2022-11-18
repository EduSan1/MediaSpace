import React from "react";
import { Value } from "sass";

export const cpfMask = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

export const onlyNumbers = (value: string) => {
    return value
        .replace(/\.|\(|\)|\-/g, '');
}

export const phoneMask = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4}).*/, "$1-$2");
}

export const onlyLetters = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ']+$");

export const passwordMask = new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&.])(?=.*[0-9])(?=.*[a-z]).{6,15}$');

export const formatDate = (value: string) => {
    const orderDate = value.split("-")
    const formatDate = `${orderDate[1]}/${orderDate[2]}/${orderDate[0]} `
    return formatDate
}

export const formatMoney = (value: number) => {
    const moneyString = value.toString(value)
    return moneyString.replace(/\./g, ',')

}
