// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

contract Counter {
    uint256 s_count;

    constructor() {
        s_count = 0;
    }

    function getCount() public view returns (uint256) {
        return s_count;
    }

    function increment() public {
        s_count += 1;
    }

    function decrement() public {
        s_count -= 1;
    }
}
