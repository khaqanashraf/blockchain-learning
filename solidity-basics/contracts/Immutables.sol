// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Immutables {
    address public immutable i_address;
    uint public immutable i_code;

    constructor() {
        i_address = 0x7bb1Dff3cFa2c96034574D43396Cf6F0dAb506c8;
        i_code = 1234;
    }
}
