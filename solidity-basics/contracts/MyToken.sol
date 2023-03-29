// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Ravi is ERC20 {
    address immutable i_owner;

    modifier onlyOwner() {
        require(msg.sender == i_owner, "Not Owner!");
        _;
    }

    constructor(address _owner) ERC20("Ravi", "RAVI") {
        i_owner = _owner;
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }

    function mint(uint _amount) public onlyOwner {
        // 1 ether = 10 ** 18
        _mint(i_owner, _amount * 1 ether);
    }
}
