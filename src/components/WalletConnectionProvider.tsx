import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { FC } from "react";

type Props = {
  readonly children: React.ReactNode;
};

// @labsfeelgood swap this for mainent
// const endpoint = clusterApiUrl('devnet');
const endpoint = clusterApiUrl("mainnet-beta");

const wallets = [new PhantomWalletAdapter()];

export const WalletConnectionProvider: FC<Props> = ({ children }) => {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
