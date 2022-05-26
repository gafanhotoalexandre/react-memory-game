import * as C from './App.styles';

import logoImage from './assets/devmemory_logo.png';

export default function App() {
  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} alt="Logo da Aplicação" width={200} />
        </C.LogoLink>

        <C.InfoArea>
          ...
        </C.InfoArea>

        <button>Reiniciar</button>
      </C.Info>

      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  );
}
