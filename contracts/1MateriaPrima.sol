// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract MateriaPrima{
    struct Materia{
        uint256 id; 
        string lugar_procedencia;
        string nombre_propietario;
        string gadros_brix;
        string acidez;
        uint256 createdAt;
    }
  mapping (uint256=>Materia)public materiaPrimas;

  function crearMatriaPrima(string memory _lugar_procedencia, string memory _nombre_propietario, string memory _grados_brix, string memory _acidez) public{
    
  }

}
