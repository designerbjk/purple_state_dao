import { useState, useEffect } from "react";
import { signMessage } from "../utils/sign";
import Metamask from "../component/metamask";

const ConnectWallet2 = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);

  const [client, setclient] = useState({
    isConnected: false,
  });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <>
      <p className="">
        {!haveMetamask ? (
          <Metamask />
        ) : client.isConnected ? (
          <>
            <button
              onClick={signMessage}
              type="button"
              className="w-full max-w-xs btn btn-primary rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
            >
              Confirm Swap
            </button>
            <p className="text-center pt-4">
              A fee is associated with this request.
            </p>
          </>
        ) : (
          <>
            <br />
            <button
              className="w-full max-w-xs btn btn-primary rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
              onClick={connectWeb3}
            >
              Connect Wallet
            </button>
          </>
        )}
      </p>
    </>
  );
};

export default ConnectWallet2;
