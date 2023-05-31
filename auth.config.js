import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { domainName } from "./const/yourDetails";
// import { dotenv } from 'dotenv';

require('dotenv').config();

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: domainName,
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
});
