import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x0850aC7A0Db7468816f5EbaFb0F10f6E1208126B";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// SaveERC20Module#SaveERC20 - 0x0AFC8d1cA3d466ac9496279D9d641a69168a9aaD



// (mentor) Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
