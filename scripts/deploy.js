const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["FourArms", "HeatBlast", "DiamondHead"],       // Names
        ["QmZHvXzAyyN36E9yWV8nrEKQfjVFgr7bF3zDaRiKNuFppF", // Images
        "QmQb6RimxcfCDvoGdL8mQPLUKbxXiJjqe2spw6uD8gXrLp", 
        "Qmdvey39sRZmdQuASM37DR5m6Fe4irY9kzKjnFuVKiVuxf"],
        [100, 200, 300],                    // HP values
        [100, 50, 25]    ,                   // Attack damage values
        "Vilgax", // Boss name
        "https://www.pngkey.com/png/detail/180-1809571_ben-10-ultimate-alien-vilgax.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();