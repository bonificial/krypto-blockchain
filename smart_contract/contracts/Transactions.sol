pragma solidity ^ 0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiever, uint amount, string message, uint256 timestamp, string keyword);

    struct transferStruct {
        address sender;
        address receiever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transferStruct[] transactions;

    function addToBlockChain(address payable receiver, uint amount, string memory message,string memory keyword) public {
        transactionCount += 1;
        transactions.push(transferStruct(msg.sender, receiver,amount,message, block.timestamp,keyword));

        emit Transfer(msg.sender, receiver,amount,message, block.timestamp,keyword);
    }

    function getAllTransactions() public view returns (transferStruct[] memory){

        //return transactions
    }

    function getTransactionCount() public view returns (uint256){

        return transactionCount;
    }

}
