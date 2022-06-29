// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract PasteurizacionMostoContract {
    struct Model {
        uint256 hash_anterior;
        string temperatura_caliente;
        string temperatura_fria;
        string tiempo_proceso;
        bool aprobado;
        uint256 createdAt;
    }
    event Id(uint256 id);

    mapping(uint256 => Model) public lista;
    uint256 public contador;

    function crear(
        uint256 _hash_anterior,
        string memory _temperatura_caliente,
        string memory _temperatura_fria,
        string memory _tiempo_proceso
    ) public {
        lista[_hash_anterior] = Model(
            _hash_anterior,
            _temperatura_caliente,
            _temperatura_fria,
            _tiempo_proceso,
            false,
            block.timestamp
        );
        emit Id(_hash_anterior);
        contador++;
    }

    function editar(
        uint256 _id,
        string memory _temperatura_caliente,
        string memory _temperatura_fria,
        string memory _tiempo_proceso
    ) public {
        Model memory _item = lista[_id];
        if (_item.aprobado == false) {
            _item.temperatura_caliente = _temperatura_caliente;
            _item.temperatura_fria = _temperatura_fria;
            _item.tiempo_proceso = _tiempo_proceso;
            lista[_id] = _item;
            emit Id(_id);
        }
    }

    function aprobarProceso(uint256 _id) public {
        Model memory _item = lista[_id];
        _item.aprobado = true;
        lista[_id] = _item;
        emit Id(_id);
    }
}
