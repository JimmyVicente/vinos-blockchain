// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ProcesoContract {
    struct Proceso {
        uint256 id;
        uint256 id_materia_prima;
        uint256 id_extraccion_mosto;
        uint256 id_pasteurizacion;
        uint256 id_fermentacion;
        uint256 id_clarificacion;
        uint256 id_trasiego;
        uint256 id_envasado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => Proceso)) public lista;
    mapping(address => uint256) public contador;

    function crear(uint256 _id_materia_prima) public {
        uint256 contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = Proceso(
            contador_id,
            _id_materia_prima,
            0,
            0,
            0,
            0,
            0,
            0,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizarProceso(uint256 _id, uint256 _id_proceso) public {
        Proceso memory _item = lista[msg.sender][_id];
        if (_item.id_extraccion_mosto != 0) {
            _item.id_extraccion_mosto = _id_proceso;
            lista[msg.sender][_id] = _item;
        }
    }
}
