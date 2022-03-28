import { css } from 'styled-components';

// normal
import UbuntuLightWoff from '@fonts/Ubuntu/ubuntu-light.woff';
import UbuntuLightWoff2 from '@fonts/Ubuntu/ubuntu-light.woff2';

import UbuntuRegularWoff from '@fonts/Ubuntu/ubuntu-regular.woff';
import UbuntuRegularWoff2 from '@fonts/Ubuntu/ubuntu-regular.woff2';

import UbuntuMediumWoff from '@fonts/Ubuntu/ubuntu-medium.woff';
import UbuntuMediumWoff2 from '@fonts/Ubuntu/ubuntu-medium.woff2';

import UbuntuboldWoff from '@fonts/Ubuntu/ubuntu-bold.woff';
import UbuntuboldWoff2 from '@fonts/Ubuntu/ubuntu-bold.woff2';

// italic
import UbuntuLightItalictWoff from '@fonts/Ubuntu/ubuntu-lightitalic.woff';
import UbuntuLightItalicWoff2 from '@fonts/Ubuntu/ubuntu-lightitalic.woff2';

import UbuntuRegularItalicWoff from '@fonts/Ubuntu/ubuntu-regularitalic.woff';
import UbuntuRegularItalicWoff2 from '@fonts/Ubuntu/ubuntu-regularitalic.woff2';

import UbuntuMediumItalicWoff from '@fonts/Ubuntu/ubuntu-mediumitalic.woff';
import UbuntuMediumItalicWoff2 from '@fonts/Ubuntu/ubuntu-mediumitalic.woff2';

import UbuntuboldItalicWoff from '@fonts/Ubuntu/ubuntu-bolditalic.woff';
import UbuntuboldItalicWoff2 from '@fonts/Ubuntu/ubuntu-bolditalic.woff2';

const UbuntuNormalWeights = {
  300: [UbuntuLightWoff, UbuntuLightWoff2],
  400: [UbuntuRegularWoff, UbuntuRegularWoff2],
  500: [UbuntuMediumWoff, UbuntuMediumWoff2],
  700: [UbuntuboldWoff, UbuntuboldWoff2],
};

const UbuntuItalicWeights = {
  300: [UbuntuLightItalictWoff, UbuntuLightItalicWoff2],
  400: [UbuntuRegularItalicWoff, UbuntuRegularItalicWoff2],
  500: [UbuntuMediumItalicWoff, UbuntuMediumItalicWoff2],
  700: [UbuntuboldItalicWoff, UbuntuboldItalicWoff2],
};

const Ubuntu = {
  name: 'Ubuntu',
  normal: UbuntuNormalWeights,
  italic: UbuntuItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const [woff, woff2] = formats;

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const UbuntuNormal = createFontFaces(Ubuntu);
const UbuntuItalic = createFontFaces(Ubuntu, 'italic');

const Fonts = css`
  ${UbuntuNormal + UbuntuItalic}
`;

export { Fonts };
