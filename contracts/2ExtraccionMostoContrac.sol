// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ExtraccionMostoContrac {
    struct ExtraccionMosto {
        uint id;
        string tipo;
        bool aprobado;
        uint createdAt;
    }

    mapping(address => mapping(uint => ExtraccionMosto)) public lista;
    mapping(address => uint) public contador;

    function crear(string memory _tipo) public {
        uint contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = ExtraccionMosto(
            contador_id,
            _tipo,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(uint _id, string memory _tipo) public {
        ExtraccionMosto memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.tipo = _tipo;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint _id) public {
        ExtraccionMosto memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
