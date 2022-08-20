// Ethers
import { ethers } from "ethers";

export default function handler(req, res) {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://jsonrpc.canto.nodestake.top/"
  );

  const providerEth = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  );

  const wallet = new ethers.Wallet(
    "pk",
    provider
  );

  // Receiver Address which receives Ether
  let receiverAddress = req.body.address;
  // Ether amount to send
  let amountInEther = "0.3";
  // Create a transaction object
  let tx = {
    to: receiverAddress,
    // Convert currency unit from ether to wei
    value: ethers.utils.parseEther(amountInEther),
  };
  // Send a transaction

  const balance = providerEth.getBalance(receiverAddress).then((balance) => {
    const balanceInEthFormatted = ethers.utils.formatEther(balance);

    if (balanceInEthFormatted > "0.002") {
      provider.getBalance(receiverAddress).then((balanceCanto) => {
        const balanceCantoFormatted = ethers.utils.formatEther(balanceCanto);

        if (balanceCantoFormatted < "0.3") {
          wallet.sendTransaction(tx).then((txObj) => {
            console.log("txHash", txObj.hash);
          });
        } else {
          console.log("too much canto");
        }
      });
    } else {
      console.log("not enough eth");
    }
  });

  console.log(req.body.address);

  // const balanceEth = providerEth

  // .getBalance(receiverAddress)
  // .then((balance) => {
  //   // convert a currency unit from wei to ether
  //   const balanceInEth = ethers.utils.formatEther(balance);

  //   if (balanceInEth > "0.01") {
  //     // convert a currency unit from wei to ether
  //     const balanceInEth = ethers.utils.formatEther(balance);
  //     if (balanceInEth < "0.3") {
  //       console.log("valid");
  //       wallet.sendTransaction(tx).then((txObj) => {
  //         console.log("txHash", txObj.hash);
  //       });
  //     } else {
  //       console.log("not vali");
  //     }
  //   } else {
  //     console.log("not valid");
  //   }
  // });
}
