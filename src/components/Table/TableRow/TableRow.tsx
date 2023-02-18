import React, { useState } from 'react';

import { TableRow as MUITableRow, TableCell } from '@mui/material';

import { LevelIcons } from '../../LevelIcons';
import { TableCells } from '../TableCells';

import { useTables } from '../../../hooks';

export const TableRow: React.FC<ITableRowProps> = ({ node, pad = -20, mode = 'parent' }) => {
  const { projectTitle } = useTables();

  const edit = !node.rowName;

  const [isEdit, setIsEdit] = useState(edit);

  const toggleEditMode = () => {
    setIsEdit(() => !isEdit);
  };

  return (
    <>
      {projectTitle !== `${node.id}` && (
        <MUITableRow className={`${node.id}`} onDoubleClick={() => toggleEditMode()}>
          <TableCell>
            <LevelIcons mode={mode} pad={pad} rowID={node.id} isEdit={isEdit}/>
          </TableCell>
          <TableCells table={node} isEdit={isEdit} toggleEditMode={toggleEditMode} />
        </MUITableRow>
      )}
      {node.child &&
        node.child.map((childNode) =>
          projectTitle !== `${node.id}` ? (
            <TableRow node={childNode} pad={pad + 22} mode='child' key={childNode.id} />
          ) : (
            <TableRow node={childNode} pad={pad + 22} mode='parent' key={childNode.id} />
          )
        )}
    </>
  );
};
