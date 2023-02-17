// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ViewAndPureFunctions {
    uint s_num;

    constructor() {
        s_num = 10;
    }

    function viewFunction() public view returns (uint) {
        return s_num;
    }

    function pureFunction(uint a, uint b) public pure returns (uint) {
        return a + b;
    }
}
