import { GridItemType } from '../../types/GridItemType';

import * as C from './styles';
import b7Svg from '../../svgs/b7.svg';
import { items } from '../../data/items';

interface GridItemProps {
  item: GridItemType;
  onClick: () => void;
}

export function GridItem({ item, onClick }: GridItemProps) {
  return (
    <C.Container
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}
    >
      { !item.permanentShown && !item.shown &&
        <C.Icon
          src={b7Svg}
          alt="Ícone de carta desconhecida"
          opacity={.1}
        />
      }

      { (item.permanentShown || item.shown) && item.item !== null &&
        <C.Icon
          src={items[item.item].icon}
          alt="Ícone de carta conhecida"
        />
      }
    </C.Container>
  );
}
