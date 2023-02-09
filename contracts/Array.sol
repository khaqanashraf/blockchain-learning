// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Array {
    address[] contributers;

    constructor() {}

    function pushContributer(address _address) public {
        contributers.push(_address);
    }

    function popContributer() public {
        contributers.pop();
    }

    function getContributer(uint _index) public view returns (address) {
        return contributers[_index];
    }

    function getNumberOfContributers() public view returns (uint) {
        return contributers.length;
    }
}
