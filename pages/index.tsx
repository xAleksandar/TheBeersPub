import { connectionTypeEnum } from "../src/lib/enums/connectionTypeEnum";
import { Searchbar, BeerTable, RandomBeer } from "../src/components";
import { statusEnum } from "@/lib/enums/statusEnum";
import { useBeerData } from "../src/lib/hooks";
import { useAppMode } from "../src/lib/hooks";
import { lang } from "../src/lib/language";
import { useAccount } from "wagmi";

import styles from "./index.module.css";

const Homepage = () => {
  const { setSearchString, status, data, refetch } = useBeerData();
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
            <>
              {appMode !== connectionTypeEnum.blockchain && (
                <>
                  <div className={styles.searchbar}>
                    <Searchbar
                      onChange={(name: string) => {
                        setSearchString(name);
                      }}
                      onSearch={() => refetch()}
                    />
                  </div>
                  <div className={styles.randomBeerWrapper}>
                    <RandomBeer />
                  </div>
                </>
              )}
              <BeerTable beers={data ?? []} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Homepage;
