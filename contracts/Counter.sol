// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {

    uint256 public number;
    string public name;

    constructor(string memory _name, uint256 _num){
        name = _name;
        number = _num;
    }

    function increment() public returns (uint256) {
        number++;
        return number;
    }

    function incrementBy2() public returns (uint256) {
        number = number + 2;
        return number;
    }

    function incrementBy3() public returns (uint256) {
        number = number + 3;
        return number;
    }

    function decrement() public returns (uint256) {
        number--;
        return number;
    }

    function decrementBy2() public returns (uint256) {
        number = number - 2;
        return number;
    }

     function decrementBy3() public returns (uint256) {
        number = number - 3;
        return number;
    }


    function storeNum(uint256 _num) public {
        number = _num;
    }

    function setName(string memory _name) public {
      name = _name;
    }

    function getName() public view returns(string memory){
      return name;
    }
}