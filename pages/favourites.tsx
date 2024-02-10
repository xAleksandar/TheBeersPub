import { useBeerData, useAppMode } from "../src/lib/hooks";
import { connectionTypeEnum } from "../src/lib/enums/connectionTypeEnum";
import { statusEnum } from "@/lib/enums/statusEnum";
import { isFavourite } from "../src/lib/favourites";
import { BeerTable } from "../src/components";
import { lang } from "../src/lib/language";
import { useAccount } from "wagmi";

import styles from "./index.module.css";

const Favourites = () => {
  const { status, data } = useBeerData();
  const { appMode } = useAppMode();
  const account = useAccount();

  return (
    <>
      {account.status !== statusEnum.connected &&
      appMode === connectionTypeEnum.blockchain ? (
        <div className={styles.center}>{`${lang.pleaseConnectWallet}.`}</div>
      ) : (
        <>
          {status === statusEnum.pending ? (
            <div className={styles.center}>{lang.commonLoading}</div>
          ) : (
            <BeerTable
              beers={
                data?.filter((beer) => isFavourite(`${appMode}-${beer.id}`)) ??
                []
              }
            />
          )}
        </>
      )}
    </>
  );
};

export default Favourites;
