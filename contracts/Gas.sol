// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Gas {

    /**
     * Declare a state variable
     */

    uint s_num;

    constructor() {
        /**
         * Initialize state variable
         */
        s_num = 0;
    }

    function getNum() public view returns(uint){
        return s_num;
    }

    function setNum(uint _num) public{
        s_num = _num;
    }

    function run() public {
        /**
         * forever running loop
         */
        while (true) {
            s_num += 1;
        }
    }
}