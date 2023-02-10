// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ArrayElementRemove {
    uint[] arr;

    constructor() {
        arr = [1, 2, 3, 4, 5];
    }

    function removeByShifting(uint _index) public {
        for (uint i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr.pop();
    }

    function removeBySwap(uint _index) public {
        arr[_index] = arr[arr.length - 1];
        arr.pop();
    }

    function getLength() public view returns (uint) {
        return arr.length;
    }

    function getArray() public view returns (uint[] memory) {
        return arr;
    }
}
