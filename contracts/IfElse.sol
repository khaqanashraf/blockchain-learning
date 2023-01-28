// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract IfElse {
    constructor() {}

    function evenOrOdd(uint _num) public pure returns (string memory) {
        return (_num % 2 == 0) ? "Even" : "Odd";
    }

    function calculateGrade(uint _percentage)
        public
        pure
        returns (string memory)
    {
        if (_percentage > 100 || _percentage < 0) {
            return "Not Valid";
        } else if (_percentage > 90) {
            return "A+";
        } else if (_percentage > 80) {
            return "A";
        } else if (_percentage > 70) {
            return "B";
        } else if (_percentage > 60) {
            return "C";
        } else if (_percentage > 50) {
            return "D";
        } else {
            return "F";
        }
    }
}
