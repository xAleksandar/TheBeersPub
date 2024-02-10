import classNames from "classnames";
import { ClickableDiv } from "../";
import { lang } from "../../lib/language";
import { useRouter } from "next/router";
import { useAppMode } from "../../lib/hooks";
import { routesEnum } from "../../lib/enums/routesEnum";
import { useConnect, useDisconnect, useAccount } from "wagmi";
import { connectionTypeEnum } from "@/lib/enums/connectionTypeEnum";

import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";

import styles from "./Headbar.module.css";
import { statusEnum } from "@/lib/enums/statusEnum";

const Headbar = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connect } = useConnect();
  const { appMode, changeAppMode } = useAppMode();
  const router = useRouter();
  const name = "TheBeersPub";

  const isActiveTab = (route: string) => router.asPath === route;

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      changeAppMode(connectionTypeEnum.blockchain);
    } else {
      changeAppMode(connectionTypeEnum.api);
    }
  };

  const handleConnectWallet = (connector: any) => {
    if (account.status === statusEnum.connected) {
      disconnect();
    } else {
      connect({ connector });
    }
  };

  const isBlockchainMode = appMode === connectionTypeEnum.blockchain;

  return (
    <div className={styles.wrapperHeadbar}>
      <div className={styles.name}>{name}</div>
      <div className={styles.options}>
        <ClickableDiv
          onClick={() => router.push(routesEnum.home)}
          className={classNames(styles.option, {
            [styles.activeOption]: isActiveTab(routesEnum.home),
          })}
        >
          {lang.commonHome}
        </ClickableDiv>
        <ClickableDiv
          onClick={() => router.push(routesEnum.favourites)}
          className={classNames(styles.option, {
            [styles.activeOption]: isActiveTab(routesEnum.favourites),
          })}
        >
          {lang.commonFavourites}
        </ClickableDiv>
        <ClickableDiv
          onClick={() => isBlockchainMode && router.push(routesEnum.mint)}
          className={classNames(styles.option, {
            [styles.activeOption]: isActiveTab(routesEnum.mint),
            [styles.disabledOption]: !isBlockchainMode,
          })}
        >
          {lang.mint}
        </ClickableDiv>
      </div>
      <div className={styles.selectorWrapper}>
        <div className={styles.selector}>
          <div
            className={styles.selectorText}
          >{`${lang.appBlochchainMode}:`}</div>
          <FormControl component="fieldset" variant="standard">
            <Switch
              checked={isBlockchainMode ? true : false}
              onChange={handleSwitchChange}
              name=""
            />
          </FormControl>
          <div className={styles.selectorText}>
            {isBlockchainMode ? lang.commonOn : lang.commonOff}
          </div>
        </div>
        {isBlockchainMode && (
          <>
            {connectors
              .filter((connector) => connector.name === "MetaMask")
              .map((connector) => (
                <button
                  className={styles.connectWalletBtn}
                  key={connector.uid}
                  onClick={() => handleConnectWallet(connector)}
                  type="button"
                >
                  {account.status === statusEnum.connected
                    ? lang.commonDisconnect
                    : lang.commonConnect}
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Headbar;
