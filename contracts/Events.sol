// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Events {
    uint s_amount;
    event Deposite(address depositor, uint amount);

    modifier validAmount(uint _amount) {
        require(_amount > 0, "Invalid amount");
        _;
    }

    constructor() {
        s_amount = 0;
    }

    function getAmount() public view returns (uint) {
        return s_amount;
    }

    function deposite(uint _amount) public validAmount(_amount) {
        s_amount += _amount;
        emit Deposite(msg.sender, _amount);
    }
}
