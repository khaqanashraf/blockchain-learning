// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SelectionSort {
    constructor() {}

    function sortAsc(uint[] memory _arr) public pure returns (uint[] memory) {
        uint n = _arr.length;
        for (uint i = 0; i < n - 1; i++) {
            uint min = i;
            for (uint j = i + 1; j < n; j++) {
                if (_arr[j] < _arr[min]) min = j;
            }

            if (min != i) {
                uint temp = _arr[i];
                _arr[i] = _arr[min];
                _arr[min] = temp;
            }
        }

        return _arr;
    }

    function sortDesc(uint[] memory _arr) public pure returns (uint[] memory) {
        uint n = _arr.length;
        for (uint i = 0; i < n - 1; i++) {
            uint max = i;
            for (uint j = i + 1; j < n; j++) {
                if (_arr[j] > _arr[max]) max = j;
            }

            if (max != i) {
                uint temp = _arr[i];
                _arr[i] = _arr[max];
                _arr[max] = temp;
            }
        }

        return _arr;
    }
}
