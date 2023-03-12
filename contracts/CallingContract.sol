// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Callee {
    uint s_num;

    constructor() {
        s_num = 0;
    }

    function getNum() public view returns (uint) {
        return s_num;
    }

    function increment() public {
        s_num += 1;
    }
}

contract Caller {
    Callee immutable i_callee;

    constructor(address _callee) {
        i_callee = Callee(_callee);
    }

    function incrementInCallee() public {
        i_callee.increment();
    }
}
