// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ClarificacionContrac {
    struct Clarificacion {
        uint256 id;
        string turbidez;
        bool aprobado;
        uint256 createdAt;
    }
    
    mapping(address => mapping(uint256 => Clarificacion)) public lista;
    mapping(address => uint256) public contador;

    function crear(string memory _turbidez) public {
        uint256 contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = Clarificacion(
            contador_id,
            _turbidez,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(uint256 _id, string memory _turbidez) public {
        Clarificacion memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.turbidez = _turbidez;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Clarificacion memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
