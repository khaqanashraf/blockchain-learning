// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ReceiveEther {
    address payable immutable i_owner;

    constructor(address payable _owner) {
        i_owner = _owner;
    }

    modifier isOwner() {
        require(msg.sender == i_owner);
        _;
    }

    function transfer() public isOwner {
        uint amount = address(this).balance;
        (bool success, ) = i_owner.call{value: amount}("");
        require(success, "Transfer failed");
    }

    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    constructor() {}

    function sendViaTransfer(address payable _contract) public payable {
        _contract.transfer(msg.value);
    }

    function sendViaSend(address payable _contract) public payable {
        bool success = _contract.send(msg.value);
        require(success, "Faild to send");
    }

    function sendViaCall(address payable _contract) public payable {
        (bool success, ) = _contract.call{value: msg.value}("");
        require(success, "Faild to send");
    }
}
