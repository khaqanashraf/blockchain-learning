// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Primitives {
    /**
     * integers or signed integers has both negative and positive whole numbers
     * range of int8: (-2^7)-1 to 2^7 => -127 to 128 => total of 256 numbers
     * range of int : (-2^255)-1 to 2^255
     * range of uint8: 0 to (2**8)-1 => 0 to 255 => total of 256
     * range of uint: 0 to (2**256)-1
     * only 1 bit is allocated for bool data type
     */
    int8 public smallInt = -1;
    int256 public num = 500;
    uint8 public smallUInt = 6;
    uint public uInt = 800;
    bool public flag = false;

    bool public defaultBool;
    int8 public defaultSmallInt;
    int public defaultInt;
    uint8 public defaultSmallUInt;
    uint public defaultUInt;

    address public addr = 0x36C02dA8a0983159322a80FFE9F24b1acfF8B570;
    bytes1 public bt = 0x61;

    address public defaultAddress;
    bytes1 public defaultBytes;

    constructor() {
        smallInt = 9;
        num = -20;
        smallUInt = 10;
        uInt = 1200;
        flag = true;
    }
}
