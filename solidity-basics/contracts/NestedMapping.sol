// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract NestedMapping {
    mapping(address => mapping(uint => bool)) nested;

    constructor() {}

    function getNested(address _address, uint _token)
        public
        view
        returns (bool)
    {
        return nested[_address][_token];
    }

    function setNested(
        address _address,
        uint _token,
        bool _status
    ) public {
        nested[_address][_token] = _status;
    }

    function removeNested(address _address, uint _token) public {
        delete nested[_address][_token];
    }
}
