// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PrimeNumbers {
    constructor() {}

    function isFactor(uint a, uint b) public pure returns (bool) {
        return b % a == 0;
    }

    function isPrime(uint num) public pure returns (bool) {
        for (uint i = 2; i < num; i++) {
            if (isFactor(i, num)) {
                return false;
            }
        }

        return true;
    }
}
