import { useState } from "react";
import { lang } from "@/lib/language";
import { useRouter } from "next/router";
import { useAppMode } from "@/lib/hooks";
import { useAccount, useWriteContract } from "wagmi";
import { statusEnum } from "@/lib/enums/statusEnum";
import { connectionTypeEnum } from "@/lib/enums/connectionTypeEnum";
import { address, abi } from "@/lib/blockchain/contracts/beerContract";
import { contractFunctionsEnum } from "@/lib/enums/contractFunctionsEnum";

import styles from "./mint.module.css";

const mint = () => {
  const { writeContractAsync } = useWriteContract();
  const { appMode } = useAppMode();
  const account = useAccount();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [brewery, setBrewery] = useState("");
  const [alcoholPercentage, setAlcoholPercentage] = useState(0);
  const [beerType, setBeerType] = useState("");
  const [price, setPrice] = useState(0);

  const onMintClick = async () => {
    await writeContractAsync({
      abi,
      address,
      functionName: contractFunctionsEnum.addBeer,
      args: [name, image_url, brewery, alcoholPercentage, beerType, price],
    });
    router.push("/");
  };

  return (
    <>
      {account.status !== statusEnum.connected &&
      appMode === connectionTypeEnum.blockchain ? (
        <div className={styles.center}>{`${lang.pleaseConnectWallet}.`}</div>
      ) : (
        <div className={styles.mintWrapper}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                placeholder={lang.mintName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                placeholder={lang.mintImageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                placeholder={lang.mintBrewery}
                onChange={(e) => setBrewery(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputField}
                type="number"
                placeholder={lang.mintAlcoholPercentage}
                onChange={(e) => setAlcoholPercentage(parseInt(e.target.value))}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                placeholder={lang.mintBeerType}
                onChange={(e) => setBeerType(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <input
                className={styles.inputField}
                type="number"
                placeholder={lang.mintPrice}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
            </div>
            <button className={styles.mintBtn} onClick={onMintClick}>
              {lang.mint}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default mint;
