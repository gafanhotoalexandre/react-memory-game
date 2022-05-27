import { useEffect, useState } from 'react';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';

import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';

export default function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  function resetAndCreateGrid() {
    // step 1 - reset the game
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // step 2 - create grid
    // 2.1 - create an empty grid
    const tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null, shown: false, permanentShown: false
      });
    }

    // 2.2 - fill the grid
    for (let filledItems = 0; filledItems < 2; filledItems++) {
      for (let item = 0; item < items.length; item++) {
        let pos = -1;
        // while () {

        // }
      }
    }

    // 2.3 - add to state
    setGridItems(tmpGrid);

    // step 3 - start the game
    setPlaying(true);

    // setGridItems([]);
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} alt="Logo da Aplicação" width={200} />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem
            label="Tempo"
            value="00:00"
          />

          <InfoItem
            label="Movimentos"
            value="0"
          />
        </C.InfoArea>

        <Button
          label="Reiniciar"
          icon={restartIcon}
          onClick={resetAndCreateGrid}
        />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          ...
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}
