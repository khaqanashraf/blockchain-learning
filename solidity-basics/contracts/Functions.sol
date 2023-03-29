// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Functions {
    constructor() {}

    function returnMany()
        public
        pure
        returns (
            uint,
            bool,
            string memory
        )
    {
        return (1, true, "Hello World");
    }

    function namedReturn()
        public
        pure
        returns (
            uint id,
            bool status,
            string memory message
        )
    {
        return (1, true, "Hello World");
    }

    function assignedReturn()
        public
        pure
        returns (
            uint id,
            bool status,
            string memory message
        )
    {
        id = 1;
        status = true;
        message = "Hello World";
    }

    function destructuredReturn() public pure returns (bool, string memory) {
        (uint id, bool status, string memory message) = returnMany();
        (uint id1, bool status1, ) = returnMany();

        message = "World is changed!";

        return (id == id1 && status == status1, message);
    }

    function parameterizedFunction(
        uint _id,
        bool _status,
        string memory _message
    ) public pure returns (bool) {
        _id = _id + 1;
        _status = _status && true;
        _message = "Hello World";
        return true;
    }

    function callFunction() public pure returns (bool) {
        parameterizedFunction(1, true, "");
        parameterizedFunction({_id: 1, _status: false, _message: ""});

        return true;
    }
}
