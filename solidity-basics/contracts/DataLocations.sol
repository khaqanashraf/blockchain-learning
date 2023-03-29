// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./SelectionSort.sol";

contract DataLocations is SelectionSort {
    enum Order {
        ASC,
        DESC
    }

    uint[] arr;
    uint[] sortedArr;
    Order sortingOrder;

    constructor() {}

    function getSortedArr() public view returns (uint[] memory) {
        return sortedArr;
    }

    function sort(uint[] calldata _arr, Order _sortingOrder) external {
        arr = _arr;
        uint[] memory sortedArray;
        if (_sortingOrder == Order.ASC) {
            sortedArray = sortAsc(_arr);
        } else {
            sortedArray = sortDesc(_arr);
        }

        sortedArr = sortedArray;
        sortingOrder = _sortingOrder;
    }
}
