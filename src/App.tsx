import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';

export default function App() {
  function resetAndCreateGrid() {

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
        ...
      </C.GridArea>
    </C.Container>
  );
}
