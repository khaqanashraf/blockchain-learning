// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Factorial {
    constructor() {}

    function fact(uint _num) public pure returns (uint) {
        uint factorial = 1;
        for (uint i = _num; i > 0; i--) {
            factorial *= i;
        }

        return factorial;
    }
}
