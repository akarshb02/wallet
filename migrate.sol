var Migrations = artifacts.require("./Migrations.sol");
var Dai = artifacts.require("./MyToken.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Migrations);
    await deployer.deploy(Dai, 1000);

};
