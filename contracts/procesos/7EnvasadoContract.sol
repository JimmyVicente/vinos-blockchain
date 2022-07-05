// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract EnvasadoContract {
    struct Botella {
        uint256 nro_botella;
        uint256 hash_anterior;
        bytes32 hash_botella;
        uint256[] estados;
        uint256[] fecha_estados;
        uint256 createdAt;
    }

    struct Model {
        uint256 hash_anterior;
        string nro_lote;
        uint256 nro_botellas;
        Botella[] botellas;
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
        Model storage _item = lista[_hash_anterior];
        _item.hash_anterior = _hash_anterior;
        _item.nro_lote = _nro_lote;
        _item.nro_botellas = _nro_botellas;
        _item.createdAt = block.timestamp;
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
        Model storage _item = lista[_id];
        if (_item.aprobado == false) {
            _item.nro_lote = _nro_lote;
            _item.nro_botellas = _nro_botellas;
            emit Id(_item.hash_anterior);
        }
    }

    function encontrarBotella(bytes32 _hash)
        public
        view
        returns (Botella memory)
    {
        for (uint256 i = 0; i < contador; i++) {
            Botella[] memory _botellas = lista[i].botellas;
            for (uint256 j = 0; j < _botellas.length; j++) {
                Botella memory _botella = _botellas[j];
                if (_botella.hash_botella == _hash) {
                    return _botella;
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
        Botella[] storage _botellas = lista[_id].botellas;
        _botellas[_index].estados.push(_estado);
        _botellas[_index].fecha_estados.push(block.timestamp);
        emit Id(_id);
    }

    function aprobarProceso(uint256 _id, string memory _info) public {
        Model storage _item = lista[_id];
        _item.aprobado = true;
        for (uint256 index = 1; index <= _item.nro_botellas; index++) {
            uint256[] memory _estados = new uint256[](1);
            uint256[] memory _fecha_estados = new uint256[](1);
            _estados[0] = 0;
            _fecha_estados[0] = block.timestamp;
            Botella memory _botella = Botella(
                index,
                _id,
                keccak256(abi.encodePacked(_info, index)),
                _estados,
                _fecha_estados,
                block.timestamp
            );
            _item.botellas.push(_botella);
        }
        emit Id(_item.hash_anterior);
    }
}
