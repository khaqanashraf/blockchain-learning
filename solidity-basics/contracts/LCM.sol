// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract LCM {
    constructor() {}

    function isFactor(uint a, uint b) public pure returns (bool) {
        return b % a == 0;
    }

    function findLcm(uint a, uint b) public pure returns (uint) {
        uint larger = a;
        if (b > a) {
            larger = b;
        }

        for (uint i = larger; i <= a * b; i++) {
            if (isFactor(a, i) && isFactor(b, i)) {
                return i;
            }
        }

        return a * b;
    }
}
