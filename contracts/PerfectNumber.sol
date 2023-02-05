// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PerfectNumber {
    constructor() {}

    function isPerfectNumber(uint _num) public pure returns (bool) {
        uint sumOfDevisors = 1;

        for (uint i = 2; i <= _num / 2; i++) {
            if (_num % i == 0) {
                sumOfDevisors += i;
            }
        }

        return sumOfDevisors == _num;
    }
}
