pragma solidity =0.6.6;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract BonusToken is ERC20{
    address Owner;
    address liquidator;

constructor() ERC20("Bonus Token","BT")public{
    Owner = msg.sender;
}

    function setLiquidator(address _liquidator)external{
    require(msg.sender == Owner,"only owner can set liquidator");
    liquidator = _liquidator;
    }
    function mint(address _to,uint _amount)external{
        require(msg.sender == liquidator,"only liquidator");
        _mint(_to,_amount);
    }

}