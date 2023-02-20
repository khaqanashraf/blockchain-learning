// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Modifiers {
    address s_owner;

    constructor() {
        s_owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == s_owner, "Not owner");
        _;
    }

    modifier validAddress(address _address) {
        require(_address != address(0), "Invalid address");
        _;
    }

    function getOwner() public view returns (address) {
        return s_owner;
    }

    function changeOwner(address _newOwner)
        public
        onlyOwner
        validAddress(_newOwner)
    {
        s_owner = _newOwner;
    }
}
