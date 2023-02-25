// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Person {
    string s_name;

    constructor(string memory _name) {
        s_name = _name;
    }

    function setName(string calldata _name) public {
        s_name = _name;
    }

    function getName() public view returns (string memory) {
        return s_name;
    }
}

contract Officer is Person {
    uint s_stars;

    constructor(uint _stars, string memory _name) Person(_name) {
        s_stars = _stars;
    }

    function setStars(uint _stars) public {
        s_stars = _stars;
    }

    function getStars() public view returns (uint) {
        return s_stars;
    }
}

contract Cop is Officer {
    uint s_rank;

    constructor(
        uint _rank,
        uint _stars,
        string memory _name
    ) Officer(_stars, _name) {
        s_rank = _rank;
    }

    function setRank(uint _rank) public {
        s_rank = _rank;
    }

    function getRank() public view returns (uint) {
        return s_rank;
    }

    function getAttributes()
        public
        view
        returns (
            uint rank,
            uint stars,
            string memory name
        )
    {
        rank = this.getRank();
        stars = this.getStars();
        name = this.getName();
    }
}

contract Shape {
    constructor() {}

    function getName() public pure virtual returns (string memory) {
        return "Shape";
    }
}

contract Circle is Shape {
    constructor() {}

    function getName() public pure override returns (string memory) {
        return "Circle";
    }
}

contract Square is Shape {
    constructor() {}

    function getName() public pure override returns (string memory) {
        return "Square";
    }
}

contract Shapes {
    Shape[] s_shapes;

    constructor() {}

    function addCircle() public {
        s_shapes.push(new Circle());
    }

    function addSquare() public {
        s_shapes.push(new Square());
    }

    function getShapeNames() public returns (string[] memory) {}
}
