import { IWallet } from './interfaces/wallet';


export interface WalletStateInterface {
  walletCurrent: IWallet;
}

function state(): WalletStateInterface {
  return {
    walletCurrent: {}
  }
};

export default state;
