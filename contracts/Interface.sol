// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MyCounter {
    uint s_count;

    constructor() {
        s_count = 0;
    }

    function getCount() public view returns (uint) {
        return s_count;
    }

    function increment() public {
        s_count++;
    }
}

interface ICount {
    function getCount() external view returns (uint);

    function increment() external;
}

contract CounterTest {
    address immutable i_counter;

    constructor(address _counter) {
        i_counter = _counter;
    }

    function incrementCounter() public {
        ICount(i_counter).increment();
    }

    function getCounter() public view returns (uint) {
        return ICount(i_counter).getCount();
    }
}
