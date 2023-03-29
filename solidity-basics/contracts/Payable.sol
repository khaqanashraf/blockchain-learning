// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Funds {
    address payable immutable i_owner;

    modifier isOwner() {
        require(i_owner == msg.sender, "Not Owner");
        _;
    }

    constructor() {
        i_owner = payable(msg.sender);
    }

    function amIOwner() public view returns (bool) {
        return i_owner == msg.sender;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function deposite() public payable {}

    function depositeNonPayable() public {}

    function withdraw() public isOwner {
        uint amount = address(this).balance;
        (bool _success, ) = i_owner.call{value: amount}("");
        require(_success, "Failed to withdraw");
    }

    function transfer(address payable _to, uint _amount) public {
        uint amount = address(this).balance;
        require(amount >= _amount, "Not enough balance!");
        (bool _success, ) = _to.call{value: _amount}("");
        require(_success, "Failed to transfer");
    }
}
