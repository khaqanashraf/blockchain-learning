// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Charity {
    address payable immutable i_owner;

    constructor(address payable _owner) {
        i_owner = _owner;
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdraw() public {
        uint amount = getBalance();
        (bool ok, ) = i_owner.call{value: amount}("");
        require(ok, "Transfer failed");
    }

    function deposit() public payable {}

    receive() external payable {}

    fallback() external payable {}
}
