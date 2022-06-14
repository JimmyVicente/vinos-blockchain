// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract TrasiegoContrac {
    struct Trasiego {
        uint id;
        uint liquido_claro;
        uint liquido_oscuro;
        bool aprobado;
        uint createdAt;
    }

    mapping(address => mapping(uint => Trasiego)) public lista;
    mapping(address => uint) public contador;

    function crear(uint _liquido_claro, uint _liquido_oscuro) public {
        uint contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = Trasiego(
            contador_id,
            _liquido_claro,
            _liquido_oscuro,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(
        uint _id,
        uint _liquido_claro,
        uint _liquido_oscuro
    ) public {
        Trasiego memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.liquido_claro = _liquido_claro;
            _item.liquido_oscuro = _liquido_oscuro;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint _id) public {
        Trasiego memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
