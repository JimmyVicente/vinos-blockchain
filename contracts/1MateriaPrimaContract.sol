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

    mapping(address => mapping(uint256 => Model)) public lista;
    mapping(address => uint256) public contador;

    function crear(
        uint256 _nro_cosecha,
        string memory _lugar_procedencia,
        string memory _nombre_propietario,
        string memory _grados_brix
    ) public {
        uint256 contador_id = contador[msg.sender];
        lista[msg.sender][contador_id] = Model(
            contador_id,
            _nro_cosecha,
            _lugar_procedencia,
            _nombre_propietario,
            _grados_brix,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[msg.sender][_id];
    }

    function atualizar(
        uint256 _id,
        uint256 _nro_cosecha,
        string memory _lugar_procedencia,
        string memory _nombre_propietario,
        string memory _grados_brix
    ) public {
        Model memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.nro_cosecha = _nro_cosecha;
            _item.lugar_procedencia = _lugar_procedencia;
            _item.nombre_propietario = _nombre_propietario;
            _item.gadros_brix = _grados_brix;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Model memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
