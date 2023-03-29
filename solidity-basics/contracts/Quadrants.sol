// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Quadrants {
    enum Quadrant {
        FIRST,
        SECOND,
        THIRD,
        FOURTH
    }

    constructor() {}

    function findQuadrant(int x, int y) public pure returns (Quadrant) {
        if (x < 0 && y > 0) {
            return Quadrant.SECOND;
        } else if (x < 0 && y < 0) {
            return Quadrant.THIRD;
        } else if (x > 0 && y < 0) {
            return Quadrant.FOURTH;
        } else {
            return Quadrant.FIRST;
        }
    }
}
