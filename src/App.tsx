import { useEffect, useState } from 'react';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // verify if opened are equal
  useEffect(() => {
    if (shownCount !== 2) return;
    const opened = gridItems.filter(item => item.shown === true);
    if (opened.length !== 2) return;

    const tmpGrid = [...gridItems];

    if (opened[0].item === opened[1].item) {
      // if both are equal, make them permanent
      for (let i in tmpGrid) {
        if (tmpGrid[i].shown) {
          tmpGrid[i].permanentShown = true;
          tmpGrid[i].shown = false;
        }
      }
    } else {
      // if they are NOT equal, close all "shown"s
      for (let i in tmpGrid) {
        tmpGrid[i].shown = false;
      }
    }

    setGridItems(tmpGrid);
    setShownCount(0);

    setMoveCount(moveCount + 1);

    }, [shownCount, gridItems]);

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
    for (let itemsToFill = 0; itemsToFill < 2; itemsToFill++) {
      for (let item = 0; item < items.length; item++) {
        let pos = -1;
        // evitando que tmpGrid receba um valor repetido
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = item;
      }
    }

    // 2.3 - add to state
    setGridItems(tmpGrid);

    // step 3 - start the game
    setPlaying(true);

    // setGridItems([]);
  }

  function handleItemClick(index: number) {
    if (!(playing && index !== null && shownCount < 2)) return;

    const tmpGrid = [...gridItems];
    if (tmpGrid[index].permanentShown && tmpGrid[index].shown) return;

    tmpGrid[index].shown = true;
    setShownCount(shownCount + 1);
    setGridItems(tmpGrid);
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
            value={formatTimeElapsed(timeElapsed)}
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
          { gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}
