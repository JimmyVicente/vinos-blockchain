// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract FermentacionContract {
    struct Fermentacion {
        uint256 id;
        uint256 fecha_inicio;
        uint256 fecha_final;
        uint256 grados_invertidos;
        bool aprobado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => Fermentacion)) public lista;
    mapping(address => uint256) public contador;

    function crear(
        uint256 _fecha_inicio,
        uint256 _fecha_final,
        uint256 _grados_invertidos
    ) public {
        uint256 contador_id = contador[msg.sender];

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
        uint256 _id,
        uint256 _fecha_inicio,
        uint256 _fecha_final,
        uint256 _grados_invertidos
    ) public {
        Fermentacion memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.fecha_inicio = _fecha_inicio;
            _item.fecha_final = _fecha_final;
            _item.grados_invertidos = _grados_invertidos;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Fermentacion memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
