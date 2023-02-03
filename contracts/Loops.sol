// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Loops {
    uint public s_counter;

    constructor() {
        s_counter = 1;
    }

    function whileLoop() public {
        while (s_counter % 10 != 0) {
            s_counter++;
        }
    }

    function forLoop() public {
        for (uint i = 0; i < 10; i++) {
            s_counter++;
        }
    }
}
