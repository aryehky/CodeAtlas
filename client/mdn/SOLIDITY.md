# Solidity

## Introduction
Solidity is a statically-typed programming language designed for implementing smart contracts on various blockchain platforms, particularly Ethereum. It enables developers to write self-executing contracts with immutable logic.

## Development Environment

### Setup
1. Install Solidity compiler:
```bash
npm install -g solc
```

2. Development frameworks:
```bash
# Hardhat
npm install --save-dev hardhat

# Truffle
npm install -g truffle
```

## Core Concepts

### Contract Structure
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // State Variables
    uint256 private storedData;
    
    // Events
    event DataStored(uint256 newValue);
    
    // Functions
    function set(uint256 x) public {
        storedData = x;
        emit DataStored(x);
    }
    
    function get() public view returns (uint256) {
        return storedData;
    }
}
```

### Data Types

#### Value Types
```solidity
contract DataTypes {
    // Boolean
    bool isActive = true;
    
    // Integers
    uint256 positiveNumber = 42;
    int256 wholeNumber = -42;
    
    // Address
    address owner = msg.sender;
    
    // Bytes
    bytes32 data = "Hello";
    
    // Enums
    enum Status { Pending, Active, Closed }
    Status public status = Status.Pending;
}
```

#### Reference Types
```solidity
contract ReferenceTypes {
    // Arrays
    uint[] public dynamicArray;
    uint[5] public fixedArray;
    
    // Structs
    struct User {
        string name;
        uint256 balance;
        bool isActive;
    }
    
    // Mappings
    mapping(address => User) public users;
}
```

### Functions

#### Function Modifiers
```solidity
contract Modifiers {
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    function restrictedFunction() public onlyOwner {
        // Only owner can execute
    }
}
```

#### Function Visibility
```solidity
contract Visibility {
    // Public - accessible from anywhere
    function publicFunction() public pure returns (uint) {
        return 1;
    }
    
    // Private - only this contract
    function privateFunction() private pure returns (uint) {
        return 2;
    }
    
    // Internal - this contract and derivatives
    function internalFunction() internal pure returns (uint) {
        return 3;
    }
    
    // External - only from outside
    function externalFunction() external pure returns (uint) {
        return 4;
    }
}
```

### Events and Error Handling

#### Events
```solidity
contract Events {
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function transfer(address to, uint256 value) public {
        // Transfer logic
        emit Transfer(msg.sender, to, value);
    }
}
```

#### Error Handling
```solidity
contract ErrorHandling {
    function requireStatement(uint x) public pure {
        require(x > 0, "Value must be positive");
    }
    
    function revertStatement() public pure {
        revert("Operation failed");
    }
    
    function assertStatement(uint x) public pure {
        assert(x != 0);
    }
}
```

## Advanced Concepts

### Inheritance
```solidity
contract Base {
    function virtualFunction() public virtual returns (string memory) {
        return "Base";
    }
}

contract Derived is Base {
    function virtualFunction() public override returns (string memory) {
        return "Derived";
    }
}
```

### Interfaces
```solidity
interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}
```

## Best Practices

### Security
1. Use latest compiler version
2. Implement access controls
3. Check for overflow/underflow
4. Validate inputs
5. Follow checks-effects-interactions pattern

### Gas Optimization
1. Use appropriate data types
2. Minimize storage operations
3. Batch operations when possible
4. Use events for cheap storage

### Code Organization
1. Use modular contract design
2. Implement proper inheritance
3. Document code thoroughly
4. Follow style guide

## Additional Resources

### Documentation
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

### Tools
- [Remix IDE](https://remix.ethereum.org/)
- [Hardhat](https://hardhat.org/)
- [Truffle Suite](https://www.trufflesuite.com/)
