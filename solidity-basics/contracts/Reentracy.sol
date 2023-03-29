// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Reentracy {
    uint s_num;
    bool s_isLocked;

    constructor() {
        s_num = 0;
        s_isLocked = false;
    }

    modifier noReentracy() {
        require(!s_isLocked, "No reentracy");
        s_isLocked = true;
        _;
        s_isLocked = false;
    }

    function getNum() public view returns (uint) {
        return s_num;
    }

    function increment() public noReentracy {
        s_num += 1;
    }

    function recursiveIncrement() public noReentracy {
        s_num += 1;
        if (s_num < 10) {
            recursiveIncrement();
        }
    }
}
