import { RESULTS_PER_ROW } from "./constants";
import { BeerType } from "../../lib/types";
import { lang } from "../../lib/language";
import { renderBeers } from "./helpers";
import { BeerComponent } from "..";

import styles from "./BeerTable.module.css";

type Props = {
  beers: BeerType[];
};

const BeerTable = (props: Props) => {
  const { beers } = props;

  return (
    <div className={styles.wrapperTable}>
      {beers.length === 0 ? (
        <div className={styles.center}>{lang.noData}</div>
      ) : (
        <div className={styles.table}>
          {renderBeers(beers, RESULTS_PER_ROW).map((beerGroup, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {beerGroup.map((beer: BeerType) => (
                <BeerComponent key={beer.id} beer={beer} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BeerTable;
