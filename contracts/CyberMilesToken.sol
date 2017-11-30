pragma solidity ^0.4.18;
import 'zeppelin-solidity/contracts/token/PausableToken.sol';

contract CyberMilesToken is PausableToken {
    string public name = "CyberMiles Token";
    string public symbol = "CMT";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 1000000000000000000000000000;

    function CyberMilesToken() public {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}