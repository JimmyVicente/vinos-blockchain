// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract FermentacionContrac {

    struct Fermentacion {
        uint id;
        uint fecha_inicio;
        uint fecha_final;
        uint grados_invertidos;
        bool aprobado;
        uint createdAt;
    }

    mapping(address => mapping(uint => Fermentacion)) public lista;
    mapping(address => uint) public contador;

    function crear(
        uint _fecha_inicio,
        uint _fecha_final,
        uint _grados_invertidos
    ) public {
        uint contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = Fermentacion(
            contador_id,
            _fecha_inicio,
            _fecha_final,
            _grados_invertidos,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(
        uint _id,
        uint _fecha_inicio,
        uint _fecha_final,
        uint _grados_invertidos
    ) public {
        Fermentacion memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.fecha_inicio = _fecha_inicio;
            _item.fecha_final = _fecha_final;
            _item.grados_invertidos = _grados_invertidos;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint _id) public {
        Fermentacion memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
