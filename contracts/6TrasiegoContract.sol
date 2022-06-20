// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract TrasiegoContract {
    struct Trasiego {
        uint256 id;
        uint256 liquido_claro;
        uint256 liquido_oscuro;
        bool aprobado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => Trasiego)) public lista;
    mapping(address => uint256) public contador;

    function crear(uint256 _liquido_claro, uint256 _liquido_oscuro) public {
        uint256 contador_id = contador[msg.sender];

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
        uint256 _id,
        uint256 _liquido_claro,
        uint256 _liquido_oscuro
    ) public {
        Trasiego memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.liquido_claro = _liquido_claro;
            _item.liquido_oscuro = _liquido_oscuro;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Trasiego memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
