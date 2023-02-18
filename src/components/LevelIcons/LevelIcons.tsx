import React, { useState } from 'react';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import { useTables } from '../../hooks';
import { useTableService } from '../../service';

import './LevelIcons.styles.scss';

export const LevelIcons: React.FC<ILevelIconsMode> = ({ mode, pad, rowID, isEdit }) => {
  const [hovered, setHovered] = useState(false);
  const { DEFAULT_ROW } = useTableService();

  const hoverClass = hovered ? 'hovered' : '';
  const hoverDelete = hovered && !isEdit ? 'hovered-delete' : '';

  const { deleteTableRow, createTableRow } = useTables();

  const onDeleteHandler = () => {
    deleteTableRow(rowID);
  };

  const onCreateHandler = () => {
    createTableRow({ ...DEFAULT_ROW, parentId: rowID });
  };

  return (
    <div className={`icon-container-${mode}`} style={{ marginLeft: `${pad}px` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`icons-layout  ${hoverClass}`}
      >
        <IconButton disableRipple onClick={onCreateHandler} sx={{ padding: 0 }}>
          <DescriptionOutlinedIcon className='icon' color='primary' />
        </IconButton>
        <IconButton disabled={isEdit} disableRipple onClick={onDeleteHandler} sx={{ padding: 0 }}>
          <DeleteIcon color='error' className={`delete ${hoverDelete}`} />
        </IconButton>
      </div>
      <span className='connect-line' />
    </div>
  );
};
