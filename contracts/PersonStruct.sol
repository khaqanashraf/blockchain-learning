// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PersonStruct {
    struct Person {
        string name;
        uint age;
    }

    Person person;

    constructor() {}

    function getPerson() public view returns (string memory, uint) {
        return (person.name, person.age);
    }

    function setName(string memory _name) public {
        person.name = _name;
    }

    function setAge(uint _age) public {
        person.age = _age;
    }
}
