// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract EnvasadoContract {
    struct Model {
        uint256 hash_anterior;
        string nro_lote;
        uint256 nro_botellas;
        bytes32[] botellas;
        uint256[] estado_botellas;
        bytes32 info;
        uint256 i_botella;
        bytes32 hash_botella;
        uint256 estado_botella;
        bool aprobado;
        uint256 createdAt;
    }

    event Id(uint256 id);
    mapping(uint256 => Model) public lista;
    uint256 public contador;

    function crear(
        uint256 _hash_anterior,
        string memory _nro_lote,
        uint256 _nro_botellas
    ) public {
        bytes32[] memory _botellas;
        uint256[] memory _estado_botellas;
        bytes32 _info;
        uint256 _i_botella;
        bytes32 _hash_botella;
        uint256 _estado_botella;
        lista[_hash_anterior] = Model(
            _hash_anterior,
            _nro_lote,
            _nro_botellas,
            _botellas,
            _estado_botellas,
            _info,
            _i_botella,
            _hash_botella,
            _estado_botella,
            false,
            block.timestamp
        );
        emit Id(_hash_anterior);
        contador++;
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[_id];
    }

    function editar(
        uint256 _id,
        string memory _nro_lote,
        uint256 _nro_botellas
    ) public {
        Model memory _item = lista[_id];
        if (_item.aprobado == false) {
            _item.nro_lote = _nro_lote;
            _item.nro_botellas = _nro_botellas;
            lista[_id] = _item;
            emit Id(_item.hash_anterior);
        }
    }

    function encontrarBotella(bytes32 _hash)
        public
        view
        returns (Model memory)
    {
        for (uint256 i = 0; i < contador; i++) {
            Model memory _item = lista[i];
            for (uint256 j = 0; j < _item.nro_botellas; j++) {
                bytes32 _hash_botella = _item.botellas[j];
                uint256 _estado_botella = _item.estado_botellas[j];
                if (_hash_botella == _hash) {
                    _item.i_botella = j + 1;
                    _item.hash_botella = _hash_botella;
                    _item.estado_botella = _estado_botella;
                    return _item;
                }
            }
        }
        revert("Hash de botella no encontrada");
    }

    function cambiarEstadoBotella(
        uint256 _id,
        uint256 _index,
        uint256 _estado
    ) public {
        Model memory _item = lista[_id];
        _item.estado_botellas[_index] = _estado;
        lista[_id] = _item;
        emit Id(_item.hash_anterior);
    }

    function aprobarProceso(uint256 _id, string memory _info) public {
        Model memory _item = lista[_id];
        bytes32[] memory _botellas = new bytes32[](_item.nro_botellas);
        uint256[] memory _estado_botellas = new uint256[](_item.nro_botellas);
        for (uint256 index = 0; index < _item.nro_botellas; index++) {
            _botellas[index] = keccak256(abi.encodePacked(_info, index));
            _estado_botellas[index] = 0;
        }
        _item.aprobado = true;
        _item.botellas = _botellas;
        _item.estado_botellas = _estado_botellas;
        _item.info = keccak256(abi.encodePacked(_info, _id));
        lista[_id] = _item;
        emit Id(_item.hash_anterior);
    }
}
