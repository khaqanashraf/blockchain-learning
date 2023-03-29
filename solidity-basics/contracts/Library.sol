// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

library MathLibrary {
    function square(uint x) internal pure returns (uint) {
        return x * x;
    }
}

contract LibraryContract {
    using MathLibrary for uint;

    constructor() {}

    function testLibrary(uint x) public pure returns (uint) {
        return x.square();
    }
}
