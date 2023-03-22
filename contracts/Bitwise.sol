// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BitwiseOps {
    constructor() {}

    function and(uint x, uint y) public pure returns (uint) {
        return x & y;
    }

    function or(uint x, uint y) public pure returns (uint) {
        return x | y;
    }

    function xor(uint x, uint y) public pure returns (uint) {
        return x ^ y;
    }

    function not(uint8 x) public pure returns (uint8) {
        return ~x;
    }

    function shiftLef(uint x, uint bits) public pure returns (uint) {
        return x << bits;
    }

    function shiftRight(uint x, uint bits) public pure returns (uint) {
        return x >> bits;
    }

    function getMask(uint bits) public pure returns (uint) {
        /**
         * to get mask of 3 bits that is 111
         * we need 1000 by shifting 3 bits left of 0001
         * then by subtracting 1000(8) - 0001(1) we'll get 111(7)
         */
        return (1 << bits) - 1;
    }
}
