// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract MateriaPrimaContract {
    struct Model {
        uint256 id;
        uint256 nro_cosecha;
        string lugar_procedencia;
        string nombre_propietario;
        string gadros_brix;
        bool aprobado;
        uint256 createdAt;
    }
    event Id(uint256 id);
    mapping(uint256 => Model) public lista;
    uint256 public contador;

    function crear(
        uint256 _nro_cosecha,
        string memory _lugar_procedencia,
        string memory _nombre_propietario,
        string memory _grados_brix
    ) public {
        lista[contador] = Model(
            contador,
            _nro_cosecha,
            _lugar_procedencia,
            _nombre_propietario,
            _grados_brix,
            false,
            block.timestamp
        );
        emit Id(contador);
        contador++;
    }

    function editar(
        uint256 _id,
        uint256 _nro_cosecha,
        string memory _lugar_procedencia,
        string memory _nombre_propietario,
        string memory _grados_brix
    ) public {
        Model memory _item = lista[_id];
        if (_item.aprobado == false) {
            _item.nro_cosecha = _nro_cosecha;
            _item.lugar_procedencia = _lugar_procedencia;
            _item.nombre_propietario = _nombre_propietario;
            _item.gadros_brix = _grados_brix;
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
