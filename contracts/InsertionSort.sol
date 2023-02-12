// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract InsertionSort {
    constructor() {}

    function sortAsc(uint[] memory _arr) public pure returns (uint[] memory) {
        uint n = _arr.length;
        for (uint i = 1; i < n; i++) {
            for (uint j = i; j > 0; j--) {
                if (_arr[j - 1] > _arr[j]) {
                    uint temp = _arr[j];
                    _arr[j] = _arr[j - 1];
                    _arr[j - 1] = temp;
                }
            }
        }

        return _arr;
    }

    function sortDesc(uint[] memory _arr) public pure returns (uint[] memory) {
        uint n = _arr.length;
        for (uint i = 1; i < n; i++) {
            for (uint j = i; j > 0; j--) {
                if (_arr[j - 1] < _arr[j]) {
                    uint temp = _arr[j];
                    _arr[j] = _arr[j - 1];
                    _arr[j - 1] = temp;
                }
            }
        }

        return _arr;
    }
}
