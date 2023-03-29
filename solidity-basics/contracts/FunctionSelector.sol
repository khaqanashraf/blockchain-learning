// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FunctionSelector {
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

    function getIncrementFunctionSignature()
        public
        pure
        returns (bytes memory)
    {
        return abi.encodeWithSignature("increment()");
    }

    function getSelector(string calldata _func) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_func)));
    }
}
