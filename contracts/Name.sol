// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MyName {
    string public name;

    function getNmae() public view returns (string memory) {
        return name
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
