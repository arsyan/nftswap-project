const ERC1155Swap = artifacts.require('ERC1155Swap');

module.exports = (deployer) => {
  deployer.deploy(ERC1155Swap);
}