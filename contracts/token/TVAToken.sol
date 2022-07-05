// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TVAToken is ERC20 {
    address _addressOwner;
    constructor() ERC20("TVA Token", "TVA"){
        _mint(msg.sender, 1000000 * 10**18);
        _addressOwner = msg.sender;
    }

    

}