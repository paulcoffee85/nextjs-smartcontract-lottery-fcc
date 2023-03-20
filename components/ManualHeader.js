import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function ManualHeader() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis(); // useMoralis is a "hook" and these let you "hook into" React state and lifecycle features

  useEffect(() => {
    // console.log("HI"); // It runs twice here in console because of "STRICT MODE" react.strict mode
    // console.log(isWeb3Enabled);
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled]);
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null Account found");
      }
    });
  });
  return (
    <div>
      {account ? (
        <div>
          Connected To {account.slice(0, 6)}...
          {account.slice(account.length - 4)}
        </div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();

            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected");
            }
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect
        </button>
      )}
    </div>
  );
}

// I'm going to show you the hard way first because.... want to understand what's goin on behind the scenes
// Then the easy way
// return (
// <div>
// {account ? (
//   <div>
//     Connected To {account.slice(0,6)}...
//     {account.slice(account.length - 4}</div>
// ) :

// (
//   <button
//     onClick={async () => {
//       await enableWeb3();
//     }}
//   >
//     Connect
//   </button>
// )}
// </div>
// );
// }
