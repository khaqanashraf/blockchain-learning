// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract EtherUnits {
    uint public immutable i_oneWei;
    uint public immutable i_oneEther;

    /**
     * 1 wei = 1
     * 1 ether = 1e18
     */

    bool public immutable i_isOneWei;
    bool public immutable i_isOneEther;

    constructor() {
        i_oneWei = 1 wei;
        i_oneEther = 1 ether;
        i_isOneWei = (1 wei== 1);
        i_isOneEther = (1 ether== 1e18);
    }
}