// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TVATOKEN is ERC721 {
    mapping(string => string) _botellas_ids;
    mapping(string => bool) _botellaExiste;
    uint256 contador = 0;

    constructor() ERC721("VINO", "TVANFT") {}

    function crearBotella(address cuenta, string memory _hash) public {
        require(!_botellaExiste[_hash]);
        _mint(cuenta, contador);
        _botellas_ids[_hash] = _hash;
        _botellaExiste[_hash] = true;
        contador++;
    }

    function encontrarBotella(string memory _hash)
        public
        view
        returns (string memory)
    {
        return _botellas_ids[_hash];
    }

    function asignarBotella(address to, uint256 tokenId) public {
        _transfer(msg.sender, to, tokenId);
    }
}

//0x1261C955E1d1aC349Fd988a27492e1139ecAD846
