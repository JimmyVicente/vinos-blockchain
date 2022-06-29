// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TVAToken is ERC20 {
    constructor() ERC20("TVA Token", "TVA"){
        _mint(msg.sender, 100000000 * 10**18);
    }
}