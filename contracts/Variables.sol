// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Variables {
    /**
     * State variables
     */
    string public s_message = 'Hello World!';
    uint public s_num = 123;
    address public s_owner;
    uint public s_blockTime;

    constructor() {
        /**
         * Local variables declaration
         * Initialized using global variables
         */
        address _owner = msg.sender;
        uint _blockTime = block.timestamp;

        s_owner = _owner;
        s_blockTime = _blockTime;
    }
}