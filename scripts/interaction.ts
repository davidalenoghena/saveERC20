import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0x0850aC7A0Db7468816f5EbaFb0F10f6E1208126B";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x0AFC8d1cA3d466ac9496279D9d641a69168a9aaD";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);

    // Withdrawal Interaction
    const withdrawAmount = ethers.parseUnits("50", 18);
    const withdrawTx = await saveERC20.withdraw(withdrawAmount);

    withdrawTx.wait();

    console.log(withdrawTx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
