// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract ArmstrongNumber {
    function getNumberOfDigits(uint _num) public pure returns (uint) {
        uint numOfDigits = 0;
        uint num = _num;
        while (num > 0) {
            numOfDigits++;
            num = num / 10;
        }
        return numOfDigits;
    }

    function isArmestrong(uint _num) public pure returns (bool) {
        uint numOfDigits = getNumberOfDigits(_num);
        uint sumOfDigits = 0;
        uint num = _num;
        for (uint i = 1; i <= numOfDigits; i++) {
            uint digit = num % 10;
            sumOfDigits += digit**numOfDigits;
            num = num / 10;
        }

        return sumOfDigits == _num;
    }
}
