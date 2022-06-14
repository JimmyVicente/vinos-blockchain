// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract EnvasadoContrac {
    struct Envasado {
        uint256 id;
        uint256 nro_lote;
        uint256 nro_botella;
        bool aprobado;
        uint256 createdAt;
    }

    mapping(address => mapping(uint256 => Envasado)) public lista;
    mapping(address => uint256) public contador;

    function crear(uint256 _nro_lote, uint256 _nro_botella) public {
        uint256 contador_id = contador[msg.sender];

        lista[msg.sender][contador_id] = Envasado(
            contador_id,
            _nro_lote,
            _nro_botella,
            false,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(
        uint256 _id,
        uint256 _nro_lote,
        uint256 _nro_botella
    ) public {
        Envasado memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.nro_lote = _nro_lote;
            _item.nro_botella = _nro_botella;
            lista[msg.sender][_id] = _item;
        }
    }

    function aprobarProceso(uint256 _id) public {
        Envasado memory _item = lista[msg.sender][_id];
        _item.aprobado = true;
        lista[msg.sender][_id] = _item;
    }
}
