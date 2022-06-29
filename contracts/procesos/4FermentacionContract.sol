// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract FermentacionContract {
    struct Model {
        uint256 hash_anterior;
        uint256 fecha_inicio;
        uint256 fecha_final;
        uint256 grados_invertidos;
        bool aprobado;
        uint256 createdAt;
    }
    event Id(uint256 id);

    mapping(uint256 => Model) public lista;
    uint256 public contador;

    function crear(
        uint256 _hash_anterior,
        uint256 _fecha_inicio,
        uint256 _fecha_final,
        uint256 _grados_invertidos
    ) public {
        lista[_hash_anterior] = Model(
            _hash_anterior,
            _fecha_inicio,
            _fecha_final,
            _grados_invertidos,
            false,
            block.timestamp
        );
        emit Id(_hash_anterior);
        contador++;
    }
    
    function editar(
        uint256 _id,
        uint256 _fecha_inicio,
        uint256 _fecha_final,
        uint256 _grados_invertidos
    ) public {
        Model memory _item = lista[_id];
        if (_item.aprobado == false) {
            _item.fecha_inicio = _fecha_inicio;
            _item.fecha_final = _fecha_final;
            _item.grados_invertidos = _grados_invertidos;
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
