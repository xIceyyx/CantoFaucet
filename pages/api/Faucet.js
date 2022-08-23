// Ethers
import { ethers } from "ethers";

export default function handler(req, res) {
  const accountsThatReceivedCanto = new Set();

  if (!req.body.address) {
    console.log("no address submitted");
    res.status(400).json({error: "no address in POST body"})
  } else {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://jsonrpc.canto.nodestake.top/"
    );
    const providerEth = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    );
  
    const wallet = new ethers.Wallet(
      "private key",
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
      if (accountsThatReceivedCanto.has(receiverAddress)) {
        res.status(400).json({status: "account already recieved canto"})
      } else {
        if (balanceInEthFormatted > "0.002") {
          provider.getBalance(receiverAddress).then((balanceCanto) => {
            const balanceCantoFormatted = ethers.utils.formatEther(balanceCanto);
    
            if (balanceCantoFormatted < "0.3") {
              wallet.sendTransaction(tx).then((txObj) => {
                console.log("txHash", txObj.hash);
              });
              accountsThatReceivedCanto.add(receiverAddress)
              res.status(200).json({status: "canto dusted"})
            } else {
              console.log("too much canto");
              res.status(400).json({status: "too much canto"})
            }
          });
        } else {
          console.log("not enough eth");
          res.status(400).json({status: "not enough eth"})
        }
        
      }
  
    });

  }
  
  

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
