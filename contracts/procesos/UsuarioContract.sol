// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract UsuarioContract {
    struct Usuario {
        uint256 id;
        string nombre;
        string identificacion;
        bytes32 clave;
        uint256 createdAt;
    }

    constructor(){
        crear("Administrador", "1105279044", "1105279044");
    }

    mapping(address => mapping(uint256 => Usuario)) public lista;
    mapping(address => uint256) public contador;

    function crear(
        string memory _nombre,
        string memory _identificacion,
        string memory _clave
    ) public {
        uint256 contador_id = contador[msg.sender];
        bytes32 _hash_clave = sha256(abi.encodePacked(_clave));
        lista[msg.sender][contador_id] = Usuario(
            contador_id,
            _nombre,
            _identificacion,
            _hash_clave,
            block.timestamp
        );
        contador[msg.sender]++;
    }

    function actualizar(uint256 _id, string memory _nombre) public {
        Usuario memory _item = lista[msg.sender][_id];
        _item.nombre = _nombre;
        lista[msg.sender][_id] = _item;
    }

    function actualizarClave(uint256 _id, string memory _clave) public {
        Usuario memory _item = lista[msg.sender][_id];
        bytes32 _hash_clave = sha256(abi.encodePacked(_clave));
        _item.clave = _hash_clave;
        lista[msg.sender][_id] = _item;
    }

    function iniciarSesion(string memory _identificacion, string memory _clave)
        public
    {
        // Usuario memory _item = lista[msg.sender][_identificacion];
        // bytes32 _hash_clave = sha256(abi.encodePacked(_clave));
        // if (_item.clave == _hash_clave) {}
    }
}
