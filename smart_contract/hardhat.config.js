require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    sepolia: {
      url:
        "https://eth-sepolia.g.alchemy.com/v2/mHVj0TPX8Ldz3mgnc5lyitAl8eTBonwA",
      accounts: [
        "ed3c6ffe9c814725b815dc79c15a7535e7380a97a10e01955a3c92fa0407e8a7",
      ],
    },
  },
};
