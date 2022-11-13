// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TVAToken is ERC721 {
    mapping(string => bool) _botellaExiste;
    uint256 contador = 0;

    constructor() ERC721("VINO", "TVANFT") {}

    function crearBotella(address cuenta, string memory _hash) public {
        require(!_botellaExiste[_hash]);
        _mint(cuenta, contador);
        _botellaExiste[_hash] = true;
        contador++;
    }

    function encontrarBotella(string memory _hash) public view returns (bool) {
        return _botellaExiste[_hash];
    }

    function asignarBotella(address to, uint256 tokenId) public {
        _transfer(msg.sender, to, tokenId);
    }
}
