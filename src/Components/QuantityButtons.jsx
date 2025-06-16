import * as React from 'react';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small"  />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput({quantity, onQuantityChange}) {
  return <NumberInput value={quantity}
  defaultValue={1}
  onChange={(event, val) => {
    if (val >= 1 && val <= 99) {
      onQuantityChange?.(val);
    }
  }}  aria-label="Quantity Input" min={1} max={99} />;
}

const green= {
  100: '#def7ec',
  200: '#bcf0da',
  300: '#84e1bc',
  400: '#31c48d',
  500: '#0e9f6e',
  600: '#057a55',
  700: '#046c4e',
  800: '#03543f',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${green[400]};
  }

  &:focus {
    border-color: ${green[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? green[700] : green[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.8rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 26px;
  height: 26px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? green[700] : green[500]};
    border-color: ${theme.palette.mode === 'dark' ? green[500] : green[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);





// import * as React from 'react';
// import { useState } from 'react';
// import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
// import { styled } from '@mui/system';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
//   return (
//     <BaseNumberInput
//       slots={{
//         root: StyledInputRoot,
//         input: StyledInput,
//         incrementButton: StyledButton,
//         decrementButton: StyledButton,
//       }}
//       slotProps={{
//         incrementButton: {
//           children: <AddIcon fontSize="small" />,
//           className: 'increment',
//           onClick: () => {
//             if (props.onIncrement) props.onIncrement();
//           },
//         },
//         decrementButton: {
//           children: <RemoveIcon fontSize="small" />,
//           onClick: () => {
//             if (props.onDecrement) props.onDecrement();
//           },
//         },
//       }}
//       {...props}
//       ref={ref}
//     />
//   );
// });

// export default function QuantityInput({ quantity, onChange, onIncrement, onDecrement }) {
//   return (
//     <NumberInput
//       value={quantity}
//       onChange={(e, val) => {
//         if (onChange) onChange(val);
//       }}
//       onIncrement={onIncrement}
//       onDecrement={onDecrement}
//       aria-label="Quantity Input"
//       min={1}
//       max={99}
//     />
//   );
// }

// // === STYLES ===

// const green = {
//   100: '#def7ec',
//   200: '#bcf0da',
//   300: '#84e1bc',
//   400: '#31c48d',
//   500: '#0e9f6e',
//   600: '#057a55',
//   700: '#046c4e',
//   800: '#03543f',
// };

// const grey = {
//   50: '#F3F6F9',
//   100: '#E5EAF2',
//   200: '#DAE2ED',
//   300: '#C7D0DD',
//   400: '#B0B8C4',
//   500: '#9DA8B7',
//   600: '#6B7A90',
//   700: '#434D5B',
//   800: '#303740',
//   900: '#1C2025',
// };

// const StyledInputRoot = styled('div')(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 400;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-items: center;
// `,
// );

// const StyledInput = styled('input')(
//   ({ theme }) => `
//   font-size: 0.8rem;
//   font-family: inherit;
//   font-weight: 400;
//   line-height: 1;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   box-shadow: 0px 2px 4px ${
//     theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
//   };
//   border-radius: 8px;
//   margin: 0 8px;
//   padding: 10px 12px;
//   outline: 0;
//   min-width: 0;
//   width: 4rem;
//   text-align: center;

//   &:hover {
//     border-color: ${green[400]};
//   }

//   &:focus {
//     border-color: ${green[400]};
//     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? green[700] : green[200]};
//   }

//   &:focus-visible {
//     outline: 0;
//   }
// `,
// );

// const StyledButton = styled('button')(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.8rem;
//   box-sizing: border-box;
//   line-height: 1.5;
//   border: 1px solid;
//   border-radius: 999px;
//   border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//   color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
//   width: 26px;
//   height: 26px;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   align-items: center;
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     cursor: pointer;
//     background: ${theme.palette.mode === 'dark' ? green[700] : green[500]};
//     border-color: ${theme.palette.mode === 'dark' ? green[500] : green[400]};
//     color: ${grey[50]};
//   }

//   &:focus-visible {
//     outline: 0;
//   }

//   &.increment {
//     order: 1;
//   }
// `,
// );

