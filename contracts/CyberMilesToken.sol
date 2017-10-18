pragma solidity ^0.4.11;
import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract CyberMilesToken is StandardToken {
    string public name = "CyberMilesToken";
    string public symbol = "CMT";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 100000000000000000000000000;

    function CyberMilesToken() {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}