// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Person {
    string s_name;
    uint immutable i_id;

    constructor(uint _id, string memory _name) {
        i_id = _id;
        s_name = _name;
    }

    function getName() public view returns (string memory) {
        return s_name;
    }

    function getId() public view returns (uint) {
        return i_id;
    }
}

contract TryCatchContract {
    event Log(string);

    Person[] _people;

    constructor() {}

    function addPerson(uint _id, string calldata _name) public {
        try new Person(_id, _name) returns (Person _person) {
            _people.push(_person);
            emit Log("Person created successfully");
        } catch {
            emit Log("Person creation failed");
        }
    }
}
