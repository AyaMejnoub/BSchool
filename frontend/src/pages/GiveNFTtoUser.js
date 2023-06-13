async function giveNFTtoUser(address, token) {
    let userWallet = await getAddress();
    let web3 = await Moralis.enableWeb3({
          chainId: 0x13881,
          privateKey:"737c9eda18bab2a9bac7e1a0594641386428a8c5e6dc1d563e2ff4d65850e70d"
    });
    console.log('in get nft')
    const options = {
        type: "erc721",
    receiver: userWallet,
    contractAddress: 0x495f947276749ce646f68ac8c248420045cb7b5e,
      tokenId: 24620740925495225772642954473988606176052624131219333213311294576112038838273
      };
    let transaction = await Moralis.transfer(options);
    let result = await transaction.wait();
    return result;
  }