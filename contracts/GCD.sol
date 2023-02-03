// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract GCD {
    constructor() {}

    function isFactor(uint a, uint b) public pure returns (bool) {
        return b % a == 0;
    }

    function findGcd(uint a, uint b) public pure returns (uint) {
        uint smaller = a;
        if (b < a) {
            smaller = b;
        }

        uint gcd = 1;

        for (uint i = 1; i <= smaller; i++) {
            if (isFactor(i, a) && isFactor(i, b)) {
                gcd = i;
            }
        }

        return gcd;
    }
}
