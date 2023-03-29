// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNFT is ERC721 {
    string constant TOKEN_URI_0 =
        "https://bafkreicsx6lswycizqxlegwf3me4r3pemeeyjuk2xvooyzcndmg4fc6bqu.ipfs.nftstorage.link/";

    string constant TOKEN_URI_1 =
        "https://bafkreigngws6jlpv6apttl72gfmlw2siqg4zlbymoe4u5awoyq6oky6fwm.ipfs.nftstorage.link/";

    string constant TOKEN_URI_2 =
        "https://bafkreihygb7pnemsketuesz55fyl6uipfxpyezoljgeq3bqpwerbyqbq7u.ipfs.nftstorage.link/";

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

    function tokenURI(uint _tokenId)
        public
        pure
        override
        returns (string memory)
    {
        uint token = _tokenId % 3;
        if (token == 0) return TOKEN_URI_0;
        else if (token == 1) return TOKEN_URI_1;
        return TOKEN_URI_2;
    }
}
