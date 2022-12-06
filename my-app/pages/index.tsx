import Head from 'next/head'
import Image from 'next/image'
import { use, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not.
  // joinedWhitelist keeps track of whether the current metamask address has joined the whilelist or not
  // loading is set to true when we are waiting for a transaction to get mined
  // numberofWhitelisted tracks the number of addresses's whitelisted
  // create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open 






  const [numberOfWhitelisted, setNumofWhitelisted] = useState(0);
  return (
    <div>
    <Head>
      <title>Whitelist Dapp</title>
      <meta name="description" content="Whitelist-Dapp" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.main}>
      <div>
        <h1 className={styles.title}>Welcome to KSK!</h1>
        <div className={styles.description}>
          Its an NFT collection for developers in Crypto.
        </div>
        <div className={styles.description}>
          {numberOfWhitelisted} have already joined the Whitelist
        </div>
        {/* {renderButton()} */}
      </div>
      <div>
        <img className={styles.image} src="./crypto-devs.svg" />
      </div>
    </div>

    <footer className={styles.footer}>
      Made with &#10084; by SAMNANG
    </footer>
  </div>
  );
}
