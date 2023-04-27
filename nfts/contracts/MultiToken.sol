// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Components is ERC1155 {
    string constant BASE_URI =
        "https://helmeted-missile.000webhostapp.com/components/";

    uint constant BREAK = 0;
    uint constant ENGINE = 1;
    uint constant TYRE = 2;

    uint constant TOKEN_TYPES = 3;

    constructor() ERC1155(BASE_URI) {}

    function uri(uint id) public pure override returns (string memory) {
        return string.concat(BASE_URI, Strings.toString(id), ".json");
    }

    function safeMint(
        uint _tokenId,
        uint _amount,
        bytes calldata _data
    ) public {
        require(_tokenId < TOKEN_TYPES, "Token id is not valid");

        _mint(msg.sender, _tokenId, _amount, _data);
    }
}
