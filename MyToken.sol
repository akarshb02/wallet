pragma solidity ^0.7.4;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("DAI TOKEN", "DAI") {
        _mint(msg.sender, initialSupply);
    }
}
