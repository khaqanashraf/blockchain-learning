// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Constructor {
    string s_name;
    address immutable i_owner;

    constructor(string memory _name, address _owner) {
        s_name = _name;
        i_owner = _owner;
    }

    function getName() public view returns (string memory) {
        return s_name;
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }
}
