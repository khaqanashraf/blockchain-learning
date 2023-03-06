// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CallReceiver {
    event CallReceived(address _sender, uint _amount, string _message);

    constructor() {}

    function test(uint _num) public {
        emit CallReceived(msg.sender, _num, "Test function called");
    }

    receive() external payable {
        emit CallReceived(msg.sender, msg.value, "Receive function called");
    }

    fallback() external payable {
        emit CallReceived(msg.sender, msg.value, "Fallback function called");
    }
}

contract CallResponse {
    event Response(bool _success, bytes _message);

    constructor() {}

    function callTest(address payable _contract) public payable {
        (bool _ok, bytes memory _data) = _contract.call{value: msg.value}(
            abi.encodeWithSignature("test()", 123)
        );

        emit Response(_ok, _data);
    }

    function callFallback(address payable _contract) public payable {
        (bool _ok, bytes memory _data) = _contract.call{value: msg.value}(
            abi.encodeWithSignature("unkownFunction()")
        );

        emit Response(_ok, _data);
    }
}
