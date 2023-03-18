// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AbiDecode {
    constructor() {}

    function encode(
        address _to,
        uint _amount
    ) public pure returns (bytes memory) {
        return abi.encode(_to, _amount);
    }

    function decode(bytes calldata _data) public pure returns (address, uint) {
        (address _to, uint _amount) = abi.decode(_data, (address, uint));
        return (_to, _amount);
    }
}
