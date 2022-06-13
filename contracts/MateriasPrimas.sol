// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract MateriasPrimas {
    uint256 public contador_id = 0;

    struct MateriaPrima {
        uint256 id;
        string lugar_procedencia;
        string nombre_propietario;
        string gadros_brix;
        bool aprobado;
        uint256 createdAt;
    }
    
    mapping(uint256 => MateriaPrima) public materiasPrimas;

    function crearMatriaPrima(
        string memory _lugar_procedencia,
        string memory _nombre_propietario,
        string memory _grados_brix
    ) public {
        materiasPrimas[contador_id] = MateriaPrima(
            contador_id,
            _lugar_procedencia,
            _nombre_propietario,
            _grados_brix,
            false,
            block.timestamp
        );
        contador_id++;
    }

    function actualizarMatriaPrima(
        uint256 _id,
        string memory _lugar_procedencia,
        string memory _nombre_propietario,
        string memory _grados_brix
    ) public {
        MateriaPrima memory _materiaPrima = materiasPrimas[_id];
        if (_materiaPrima.aprobado == false) {
            _materiaPrima.lugar_procedencia = _lugar_procedencia;
            _materiaPrima.nombre_propietario = _nombre_propietario;
            _materiaPrima.gadros_brix = _grados_brix;
            materiasPrimas[_id] = _materiaPrima;
        }
    }

    function aprobarProceso(uint256 _id) public {
        MateriaPrima memory _materiaPrima = materiasPrimas[_id];
        _materiaPrima.aprobado = true;
        materiasPrimas[_id] = _materiaPrima;
    }
}
