// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract UncheckedMath {
    constructor() {}

    function add(uint a, uint b) public pure returns (uint) {
        unchecked {
            return a + b;
        }
    }

    function sub(uint a, uint b) public pure returns (uint) {
        unchecked {
            return a - b;
        }
    }

    function sumOfCubes(uint x, uint y) public pure returns (uint) {
        unchecked {
            uint x3 = x * x * x;
            uint y3 = y * y * y;
            return x3 + y3;
        }
    }
}
