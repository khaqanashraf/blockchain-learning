// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleStorage {
    /**
     * Declare state variables
     */
    uint s_num;

    constructor() {
        /**
         * Initialize state variable
         */
        s_num = 0;
    }

    /**
     * Function to override state variable
     */
    function setNum(uint _num) public {
        s_num = _num;
    }

    /**
     * Function to reterieve state variable value
     */
    function getNum() public view returns (uint) {
        return s_num;
    }
}
