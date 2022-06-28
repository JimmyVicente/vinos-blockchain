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

    mapping(address => mapping(uint256 => Model)) public lista;

    function crear(uint256 _hash_anterior, string memory _tipo) public {
        lista[msg.sender][_hash_anterior] = Model(
            _hash_anterior,
            _tipo,
            false,
            block.timestamp
        );
        emit Id(_hash_anterior);
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[msg.sender][_id];
    }

    function editar(uint256 _id, string memory _tipo) public {
        Model memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.tipo = _tipo;
            lista[msg.sender][_id] = _item;
            emit Id(_id);
        }
    }

    function aprobarProceso(uint256 _id) public {
        Model memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
        emit Id(_id);
    }
}
