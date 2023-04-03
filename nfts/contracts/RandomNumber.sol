// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IRandomNumber {
    function psudoRandomNumber(uint) external view returns (uint);
}

contract RandomNumber {
    uint constant a = 453762857245425872388989784563;
    uint constant b = 185584781868256414323064012709;
    uint constant m = 999999999999999999999999999999;

    constructor() {}

    function psudoRandomNumber(uint _digestion) external view returns (uint) {
        uint seed = block.timestamp * block.number * (_digestion + 1);
        return (a * seed + b) % m;
    }
}
