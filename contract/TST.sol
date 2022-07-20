// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TST is ERC20, Ownable, ReentrancyGuard {
    IERC20 public usdc;
    address public multiSig = 0x3847B210444C48e7fa75309483C605df2a89F317;

    constructor() ERC20("Trust Seed Token (Purple State DAO)", "TST") {
        usdc = IERC20(0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function mintOnUsdc(uint256 amount) public nonReentrant {
        usdc.transferFrom(msg.sender, multiSig, amount);
        uint256 mintAmount = amount * 20;
        _mint(msg.sender, mintAmount);
    }
}
