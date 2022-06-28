// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract EnvasadoContract {
    struct Model {
        uint256 hash_anterior;
        string nro_lote;
        uint256 nro_botellas;
        string[] botellas;
        string info;
        uint256 i_botella;
        string hash_botella;
        bool aprobado;
        uint256 createdAt;
    }
    event Id(uint256 id);
    mapping(address => mapping(uint256 => Model)) public lista;
    uint256 contador;

    function crear(
        uint256 _hash_anterior,
        string memory _nro_lote,
        uint256 _nro_botellas
    ) public {
        string[] memory _botellas;
        string memory _info;
        uint256 _i_botella;
        string memory _hash_botella;
        lista[msg.sender][_hash_anterior] = Model(
            _hash_anterior,
            _nro_lote,
            _nro_botellas,
            _botellas,
            _info,
            _i_botella,
            _hash_botella,
            false,
            block.timestamp
        );
        emit Id(_hash_anterior);
        contador++;
    }

    function encontrar(uint256 _id) public view returns (Model memory) {
        return lista[msg.sender][_id];
    }

    function editar(
        uint256 _id,
        string memory _nro_lote,
        uint256 _nro_botellas
    ) public {
        Model memory _item = lista[msg.sender][_id];
        if (_item.aprobado == false) {
            _item.nro_lote = _nro_lote;
            _item.nro_botellas = _nro_botellas;
            lista[msg.sender][_id] = _item;
            emit Id(_item.hash_anterior);
        }
    }

    function bytes32ToString(bytes32 x) public pure returns (string memory) {
        bytes memory bytesString = new bytes(32);
        uint256 charCount = 0;
        for (uint256 j = 0; j < 32; j++) {
            bytes1 char = bytes1(bytes32(uint256(x) * 2**(8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (uint256 j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }

    function sha256F1(string memory x) public pure returns (string memory) {
        bytes32 _hash1 = sha256(abi.encodePacked(x));
        string memory has = bytes32ToString(_hash1);
        return has;
    }

    function testA() public pure returns (bytes32) {
        return keccak256(abi.encodePacked(uint256(2), uint256(0)));
    }

    function encryptarInfo(string memory _info, uint256 _i)
        public
        pure
        returns (string memory)
    {
        bytes32 _hash = keccak256(abi.encodePacked(_info, _i));
        return bytes32ToString(_hash);
    }

    function encontrarBotella(string memory _hash)
        public
        view
        returns (Model memory)
    {
        Model memory _item;
        for (uint256 i = 0; i < contador; i++) {
            _item = lista[msg.sender][i];
            for (uint256 j = 1; j <= _item.nro_botellas; j++) {
                string memory _hash_botella = _item.botellas[j];
                bytes32 _hash1 = sha256(abi.encodePacked(_hash_botella));
                bytes32 _hash2 = sha256(abi.encodePacked(_hash));
                if (_hash1 == _hash2) {
                    _item.i_botella = j;
                    _item.hash_botella = _hash_botella;
                    return _item;
                }
            }
        }
        return _item;
    }

    function aprobarProceso(uint256 _id, string memory _info) public {
        Model memory _item = lista[msg.sender][_id];
        string[] memory _botellas;
        for (uint256 index = 1; index <= _item.nro_botellas; index++) {
            _botellas[index] = encryptarInfo(_info, index);
        }
        _item.aprobado = true;
        _item.botellas = _botellas;
        _item.info = encryptarInfo(_info, _id);
        lista[msg.sender][_id] = _item;
        emit Id(_item.hash_anterior);
    }
}
