// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Account {
    error InsufficientBalance(uint balance, uint withdrawAmount);

    uint s_balance;
    uint immutable i_maxUint;

    constructor() {
        s_balance = 0;
        i_maxUint = 2**256 - 1;
    }

    function getBalance() public view returns (uint) {
        return s_balance;
    }

    function deposite(uint _amount) public {
        uint oldBalance = s_balance;
        uint newBalance = s_balance + _amount;

        require(newBalance >= oldBalance, "Bad amount");
        require(newBalance <= i_maxUint, "Overflow");

        s_balance = newBalance;

        assert(s_balance >= oldBalance);
    }

    function withdraw(uint _amount) public {
        uint oldBalance = s_balance;
        uint newBalance = s_balance - _amount;

        require(newBalance >= 0 && newBalance <= oldBalance, "Bad amount");

        if (_amount > s_balance) {
            revert InsufficientBalance(s_balance, _amount);
        }

        s_balance = newBalance;

        assert(s_balance <= oldBalance);
    }
}
