// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TVAToken is ERC20 {
    struct Botella {
        bytes32 hash_botella;
        uint256 createdAt;
    }
    address _addressOwner;
    Botella[] _botellas_vendidas;

    constructor() ERC20("TVA Token", "TVA") {
        _mint(msg.sender, 100000 * 10**18);
        _addressOwner = msg.sender;
    }

    function encontrarBotellaVendida(bytes32 _hash) public view returns (bool) {
        for (uint256 i = 0; i < _botellas_vendidas.length; i++) {
            Botella memory _botella = _botellas_vendidas[i];
            if (_botella.hash_botella == _hash) {
                return true;
            }
        }
        return false;
    }

    function enviarToken(bytes32 _hash) public {
        bool token_asignado = encontrarBotellaVendida(_hash);
        if (token_asignado == false) {
            if (_addressOwner != msg.sender) {
                _botellas_vendidas.push(Botella(_hash, block.timestamp));
                _transfer(_addressOwner, msg.sender, 1);
            } else {
                revert("La cuenta no debe ser la misma que la de destino");
            }
        } else {
            revert("Token asignado a otra persona");
        }
    }
}

// 0xb0880cf5e4b66a7f58663ee5af881b9522dd3b5c248682b343a3c735173c22ad
