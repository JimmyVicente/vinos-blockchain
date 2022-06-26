// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract TrasiegoContract {
    struct Model {
        uint256 hash_anterior;
        string liquido_claro;
        string liquido_oscuro;
        bool aprobado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => Model)) public lista;

    function crear(
        uint256 _hash_anterior,
        string memory _liquido_claro,
        string memory _liquido_oscuro
    ) public {
        lista[msg.sender][_hash_anterior] = Model(
            _hash_anterior,
            _liquido_claro,
            _liquido_oscuro,
            false,
            block.timestamp
        );
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[msg.sender][_id];
    }

    function actualizar(
        uint256 _id,
        string memory _liquido_claro,
        string memory _liquido_oscuro
    ) public {
        Model memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.liquido_claro = _liquido_claro;
            _item.liquido_oscuro = _liquido_oscuro;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Model memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
