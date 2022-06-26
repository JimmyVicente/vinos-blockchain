// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract EnvasadoContract {
    struct Model {
        uint256 hash_anterior;
        string nro_lote;
        uint256 nro_botellas;
        string[] botellas;
        bool aprobado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => Model)) public lista;

    function crear(
        uint256 _hash_anterior,
        string memory _nro_lote,
        uint256 _nro_botellas,
        string[] memory _botellas
    ) public {
        lista[msg.sender][_hash_anterior] = Model(
            _hash_anterior,
            _nro_lote,
            _nro_botellas,
            _botellas,
            false,
            block.timestamp
        );
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[msg.sender][_id];
    }

    function actualizar(
        uint256 _id,
        string memory _nro_lote,
        uint256 _nro_botellas
    ) public {
        Model memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.nro_lote = _nro_lote;
            _item.nro_botellas = _nro_botellas;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Model memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
