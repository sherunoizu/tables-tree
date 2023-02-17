import React, { useState } from 'react';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import { useTables } from '../../hooks';

import './LevelIcons.styles.scss';

export const LevelIcons: React.FC<ILevelIconsMode> = ({ mode, pad, rowID }) => {
  const [hovered, setHovered] = useState(false);

  const hoverClass = hovered ? 'hovered' : '';
  const hoverDelete = hovered ? 'hovered-delete' : '';

  const { deleteTableRow } = useTables();

  const onDeleteHandler = () => {
    deleteTableRow(rowID);
  };

  return (
    <div className={`icon-container-${mode}`} style={{ marginLeft: `${pad}px` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`icons-layout  ${hoverClass}`}
      >
        <DescriptionOutlinedIcon className='icon' color='primary' />
        <IconButton disableRipple onClick={onDeleteHandler}>
          <DeleteIcon color='error' className={`delete ${hoverDelete}`} />
        </IconButton>
      </div>
      <span className='connect-line' />
    </div>
  );
};
