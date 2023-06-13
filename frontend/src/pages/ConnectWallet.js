import { Link } from "react-router-dom";

export default function ConnectWallet() {
  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request access to the user's MetaMask accounts
        await window.ethereum.enable();
        // Wallet is connected, perform further actions here
        console.log("Wallet connected!");
      } else {
        // MetaMask is not installed, suggest installing it
        window.alert("MetaMask is not detected. Please install MetaMask to connect your wallet.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <section>
      <div className="signup-pages">
        <h1 className="signup-h1">Connect your Wallet</h1>
        <p className="signup-p">
          When you successfully complete a lesson or graduate from a course at LearnWeb3, we issue free graduation certificates to you to share and show off to the world! These certificates are given out as Proof of Knowledge NFTs and require an Ethereum wallet to be given to. Connect your wallet to make sure you don't miss out!
        </p>
        <Link to="/linkdiscord">
          <button className="signup-prev-button">Prev</button>
        </Link>
        <button className="signup-main-buttons" onClick={connectWallet}>
          Connect Wallet
        </button>
        <Link to="/home">
          <button className="signup-next-button">Next</button>
        </Link>
      </div>
    </section>
  );
}
