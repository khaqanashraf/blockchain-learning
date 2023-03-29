// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Car {
    address immutable i_carAddress;
    uint immutable i_model;
    address immutable i_owner;

    constructor(uint _model, address _owner) {
        i_model = _model;
        i_owner = _owner;
        i_carAddress = address(this);
    }

    function getCarAddress() public view returns (address) {
        return i_carAddress;
    }

    function getModel() public view returns (uint) {
        return i_model;
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }
}

contract CarFactory {
    Car[] s_cars;

    constructor() {}

    function addNewCar(uint _model, address _owner) public {
        Car _car = new Car(_model, _owner);
        s_cars.push(_car);
    }

    function getCars() public view returns (Car[] memory) {
        return s_cars;
    }
}
