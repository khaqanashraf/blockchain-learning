// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract BasicNFT is ERC721 {
    string constant BASE_URI = "https://igqc37.deta.dev/pirates/";
    uint s_tokenCounter;

    constructor() ERC721("Pirates", "PRT") {
        s_tokenCounter = 0;
    }

    function mint() public returns (uint) {
        uint tokenId = s_tokenCounter;
        _safeMint(msg.sender, tokenId);
        s_tokenCounter = tokenId + 1;
        return tokenId;
    }

    function getTokenCounter() public view returns (uint) {
        return s_tokenCounter;
    }

    function baseUri() public pure returns (string memory) {
        return BASE_URI;
    }

    function tokenURI(uint _tokenId)
        public
        pure
        override
        returns (string memory)
    {
        return string.concat(BASE_URI, Strings.toString(_tokenId % 3));
    }
}
