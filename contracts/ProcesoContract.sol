// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ProcesoContract {
    struct Model {
        string hash_info;
        uint256 createdAt;
    }
    mapping(string => Model) public lista;

    function crear(string memory _info) public returns (Model memory) {
        Model memory _model = Model(_info, block.timestamp);
        lista[_info] = _model;
        return _model;
    }

    function encontrar(string memory _id) public view returns (Model memory) {
        return lista[_id];
    }
}
