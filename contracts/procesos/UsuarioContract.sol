// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ModelContract {
    struct Model {
        uint256 id;
        string nombre;
        string identificacion;
        string billetera;
        uint256[] permisos;
        uint256 createdAt;
    }
    event Id(uint256 id);
    constructor() {
        // crear("Administrador", "1105279044", "1105279044");
    }

    mapping(uint256 => Model) public lista;
    uint256 public contador;

    function crear(
        string memory _nombre,
        string memory _identificacion,
        string memory _billetera,
        uint256[] memory _permisos
    ) public {
        uint256 contador_id = contador;
        lista[contador_id] = Model(
            contador_id,
            _nombre,
            _identificacion,
            _billetera,
            _permisos,
            block.timestamp
        );
        emit Id(contador_id);
        contador++;
    }

    function actualizar(
        uint256 _id,
        string memory _nombre,
        string memory _identificacion,
        string memory _billetera,
        uint256[] memory _permisos
    ) public {
        Model memory _item = lista[_id];
        _item.nombre = _nombre;
        _item.billetera = _billetera;
        _item.identificacion = _identificacion;
        _item.permisos = _permisos;
        lista[_id] = _item;
        emit Id(_id);
    }
}
