// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Base {
    constructor() {}

    function publicFunction() public pure returns (string memory) {
        return "public";
    }

    function privateFunction() private pure returns (string memory) {
        return "private";
    }

    function internalFunction() internal pure returns (string memory) {
        return "internal";
    }

    function externalFunction() external pure returns (string memory) {
        return "external";
    }

    function testPrivateFunction() public pure returns (string memory) {
        return privateFunction();
    }
}

contract Child is Base {
    constructor() {}

    function testInternalFunction() public pure returns (string memory) {
        return internalFunction();
    }
}
