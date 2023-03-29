// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BubbleSort {
    constructor() {}

    function sortAscending(uint[] memory _array)
        public
        pure
        returns (uint[] memory)
    {
        uint n = _array.length;
        for (uint i = 0; i < n - 1; i++) {
            for (uint j = i + 1; j < n; j++) {
                if (_array[i] > _array[j]) {
                    uint temp = _array[i];
                    _array[i] = _array[j];
                    _array[j] = temp;
                }
            }
        }

        return _array;
    }

    function sortDescending(uint[] memory _array)
        public
        pure
        returns (uint[] memory)
    {
        uint n = _array.length;
        for (uint i = 0; i < n - 1; i++) {
            for (uint j = i + 1; j < n; j++) {
                if (_array[i] < _array[j]) {
                    uint temp = _array[i];
                    _array[i] = _array[j];
                    _array[j] = temp;
                }
            }
        }

        return _array;
    }
}
