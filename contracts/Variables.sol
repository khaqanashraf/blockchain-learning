// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Variables {
    string public s_message = 'Hello World!';
    uint public s_num = 123;
    address public s_owner;
    uint public s_blockTime;
    
    constructor() {
        s_owner = msg.sender;
        s_blockTime = block.timestamp;
    }
}