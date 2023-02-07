// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Mapping {
    mapping(address => uint) balance;
    mapping(address => mapping(uint => bool)) nested;

    constructor() {}

    function getBalance(address _address) public view returns (uint) {
        return balance[_address];
    }

    function addBalance(address _address, uint _balance) public {
        balance[_address] = _balance;
    }

    function removeBalance(address _address) public {
        delete balance[_address];
    }
}
