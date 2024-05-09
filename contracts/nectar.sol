// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^4.3.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Nectar is ERC721, Ownable {
    uint256 private _currentTokenId;

    constructor()
        ERC721("Nectar", "NCT")
        Ownable(msg.sender)
    {
        _currentTokenId = 0;
    }

    function getCurrentTokenId() public view returns (uint256) {
        return _currentTokenId;
    }

    function safeMint(address to) public {
        _safeMint(to, _currentTokenId);
        _currentTokenId++;
    }
}