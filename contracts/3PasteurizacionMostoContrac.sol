// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract PasteurizacionMostoContrac {
    struct Pasteurizacion {
        uint id;
        string temperatura_caliente;
        string temperatura_fria;
        string tiempo_proceso;
        bool aprobado;
        uint createdAt;
    }
    
    mapping(address => mapping(uint => Pasteurizacion)) public lista;
    mapping(address => uint) public contador;

    function crear(
        string memory _temperatura_caliente,
        string memory _temperatura_fria,
        string memory _tiempo_proceso
    ) public {
        uint contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = Pasteurizacion(
            contador_id,
            _temperatura_caliente,
            _temperatura_fria,
            _tiempo_proceso,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(
        uint _id,
        string memory _temperatura_caliente,
        string memory _temperatura_fria,
        string memory _tiempo_proceso
    ) public {
        Pasteurizacion memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.temperatura_caliente = _temperatura_caliente;
            _item.temperatura_fria = _temperatura_fria;
            _item.tiempo_proceso = _tiempo_proceso;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint _id) public {
        Pasteurizacion memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
