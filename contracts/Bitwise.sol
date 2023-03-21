// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BitwiseOps {
    constructor() {
        
    }

    function and(uint x, uint y) public pure returns(uint){
        return x & y;
    }

    function or(uint x, uint y) public pure returns(uint){
        return x | y;
    }

    function xor(uint x, uint y) public pure returns(uint){
        return x ^ y;
    }

    function not(uint x) public pure returns(uint){
        return ~x;
    }

    function shiftLef(uint x, uint bits) public pure returns(uint){
        return x << bits;
    }

    function shiftRight(uint x, uint bits) public pure returns(uint){
        return x >> bits;
    }

    function getMask(uint bits) public pure returns(uint){
        return (1 << bits) - 1;
    }
}