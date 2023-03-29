// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Keccak256 {
    constructor() {}

    function createHash(string calldata _message)
        public
        view
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(msg.sender, _message));
    }
}
