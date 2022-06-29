// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ExtraccionMostoContract {
    struct Model {
        uint256 hash_anterior;
        string tipo;
        bool aprobado;
        uint256 createdAt;
    }
    event Id(uint256 id);

    mapping(uint256 => Model) public lista;
    uint256 public contador;

    function crear(uint256 _hash_anterior, string memory _tipo) public {
        lista[_hash_anterior] = Model(
            _hash_anterior,
            _tipo,
            false,
            block.timestamp
        );
        emit Id(_hash_anterior);
        contador++;
    }

    function editar(uint256 _id, string memory _tipo) public {
        Model memory _item = lista[_id];
        if (_item.aprobado == false) {
            _item.tipo = _tipo;
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