// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract UsuarioContract {
    struct Model {
        uint256 id;
        address billetera;
        string nombre;
        uint256[] permisos;
        uint256 rol;
        uint256 createdAt;
    }
    event Id(uint256 id);

    mapping(uint256 => Model) public lista;
    uint256 public contador;

    constructor() {
        Model storage _item = lista[contador];
        _item.id = contador;
        _item.billetera = msg.sender;
        _item.nombre = "Jimmy Vicente";
        _item.permisos = [1, 2, 3, 4, 5, 6, 7];
        _item.rol = 0;
        _item.createdAt = block.timestamp;
        contador++;
    }

    function crear(
        address _billetera,
        string memory _nombre,
        uint256[] memory _permisos,
        uint256 _rol
    ) public {
        lista[contador] = Model(
            contador,
            _billetera,
            _nombre,
            _permisos,
            _rol,
            block.timestamp
        );
        emit Id(contador);
        contador++;
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[_id];
    }

    function encontrarBilletera(address _billetera)
        public
        view
        returns (Model memory)
    {
        for (uint256 i = 0; i < contador; i++) {
            Model memory _item = lista[i];
            if (_item.billetera == _billetera) {
                return _item;
            }
        }
        revert("Billetera no encontrada");
    }

    function eliminar(uint256 _id) public {
        delete lista[_id];
        emit Id(_id);
    }

    function editar(
        uint256 _id,
        address _billetera,
        string memory _nombre,
        uint256[] memory _permisos,
        uint256 _rol
    ) public {
        Model memory _item = lista[_id];
        _item.nombre = _nombre;
        _item.billetera = _billetera;
        _item.permisos = _permisos;
        _item.rol = _rol;
        lista[_id] = _item;
        emit Id(_id);
    }
}
