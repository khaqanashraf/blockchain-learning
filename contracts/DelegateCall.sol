// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract DelegateCalledContract {
    address s_sender;
    uint s_value;
    uint s_num;

    constructor() {}

    function setValues(uint _num) public payable {
        s_sender = msg.sender;
        s_value = msg.value;
        s_num = _num;
    }

    function getValues()
        public
        view
        returns (
            address _sender,
            uint _value,
            uint _num
        )
    {
        return (s_sender, s_value, s_num);
    }
}

contract DelegateCallerContract {
    address s_sender;
    uint s_value;
    uint s_num;

    constructor() {}

    function setValues(address payable _contract, uint _num) public payable {
        (bool success, ) = _contract.delegatecall(
            abi.encodeWithSignature("setValues(uint)", _num)
        );

        require(success, "Delegate call failed");
    }

    function getValues()
        public
        view
        returns (
            address _sender,
            uint _value,
            uint _num
        )
    {
        return (s_sender, s_value, s_num);
    }
}
