// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NewContract.sol";

contract ImportedCarFactory {
    Car[] s_cars;

    constructor() {}

    function addCar(uint _model, address _owner) public {
        Car _car = new Car(_model, _owner);
        s_cars.push(_car);
    }

    function getCar(uint _index) public view returns (Car) {
        return s_cars[_index];
    }
}
