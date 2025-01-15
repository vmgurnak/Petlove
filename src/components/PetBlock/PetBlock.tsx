import { FC } from 'react';
import css from './PetBlock.module.css';

interface PetBlockProps {
  images: {
    mob1x: string;
    mob2x: string;
    tab1x: string;
    tab2x: string;
    pc1x: string;
    pc2x: string;
  };
}

export const PetBlock: FC<PetBlockProps> = ({
  images: { mob1x, mob2x, tab1x, tab2x, pc1x, pc2x },
}) => {
  return (
    <div className={css.petBlock}>
      <picture>
        <source srcSet={`${pc1x} 1x, ${pc2x} 2x`} media="(min-width: 1280px)" />
        <source
          srcSet={`${tab1x} 1x, ${tab2x} 2x`}
          media="(min-width: 768px)"
        />
        <source srcSet={`${mob1x} 1x, ${mob2x} 2x`} />
        <img src={mob1x} alt="pets" />
      </picture>
    </div>
  );
};

export default PetBlock;
