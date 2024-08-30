import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Web3CXIModule = buildModule("Web3CXIModule", (m) => {

    const erc20 = m.contract("Web3CXI");

    return { erc20 };
});

export default Web3CXIModule;

// Web3CXIModule#Web3CXI - 0x0850aC7A0Db7468816f5EbaFb0F10f6E1208126B