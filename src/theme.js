const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `all and (min-width:330px) and (max-width:${deviceSizes.mobile})`,
  tablet: `all and (min-width:${deviceSizes.mobile}) and (max-width:${deviceSizes.tablet})`,
  laptop: `all and (min-width:${deviceSizes.tablet})`,
};

const pixelToRem = (size) => `${size / 16}rem`;

const fontSize = {
  xLarge: pixelToRem(45),
  large: pixelToRem(35),
  middle: pixelToRem(30),
  small: pixelToRem(25),
  xSmall: pixelToRem(20),
  xxSmall: pixelToRem(15),
};

const color = {
  black: '#000',
  white: '#eee',
  purple: '#8e24aa',
};

const common = {
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  hideScrollBar: `
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  `,
};

const theme = {
  fontSize,
  color,
  common,
  device,
};

export default theme;
