// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ExtraccionMostoContrac {
    struct ExtraccionMosto {
        uint256 id;
        string tipo;
        bool aprobado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => ExtraccionMosto)) public lista;
    mapping(address => uint256) public contador;

    function crear(string memory _tipo) public {
        uint256 contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = ExtraccionMosto(
            contador_id,
            _tipo,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(uint256 _id, string memory _tipo) public {
        ExtraccionMosto memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.tipo = _tipo;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        ExtraccionMosto memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
