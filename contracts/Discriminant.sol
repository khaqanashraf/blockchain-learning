// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Discriminant {
    constructor() {}

    function calculateDiscriminant(
        int a,
        int b,
        int c
    ) public pure returns (int) {
        return b * b - 4 * a * c;
    }

    function roots(
        int a,
        int b,
        int c
    ) public pure returns (string memory) {
        int discriminant = calculateDiscriminant(a, b, c);
        if (discriminant == 0) {
            return "Real and Equal";
        } else if (discriminant < 0) {
            return "Imaginary and Unequal";
        } else {
            return "Real and Unequal";
        }
    }
}
