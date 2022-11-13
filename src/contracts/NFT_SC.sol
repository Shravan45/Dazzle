// SPDX-License-Identifier: UNLICENSED
pragma solidity >0.5.0 <0.9.0;

contract NFT_SC is TRC721, TRC165 {
    string public constant TOKEN_URI =
    "ipfs://QmXfCT9BZ2AC3Vn1RTiPtuUy9dBZxKUUJTZtu9iKvcqeCK/?filename=0-DAZZLE.json";

    // To track how many tokens are minted and also the token IDs
    uint256 private s_tokenCounter;

    event DazzleMinted(uint256 indexed tokenId);

    constructor() TRC721("Dazzle", "DZ") {
        s_tokenCounter = 0;
    }

    /*
     * It mints the token and registers the msg.sender (i.e. the function’s caller) 
     * as the owner of the NFT with the token ID passed in the second argument.
     */
    function mintNft() public {
        _safeMint(msg.sender, s_tokenCounter);
        emit DazzleMinted(s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "TRC721Metadata: URI query for nonexistent token");
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}