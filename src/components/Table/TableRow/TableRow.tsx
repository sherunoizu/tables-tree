import React from 'react';

import { TableRow as MUITableRow, TableCell } from '@mui/material';

import { LevelIcons } from '../../LevelIcons';

import { useTables } from '../../../hooks';

export const TableRow: React.FC<ITableRowProps> = ({ node, pad = -20, mode = 'parent' }) => {
  const { projectTitle } = useTables();

  return (
    <>
      {projectTitle !== `${node.id}` && (
        <MUITableRow className={`anime ${node.id}`}>
          <TableCell component='th'>
            <LevelIcons mode={mode} pad={pad} rowID={node.id} />
          </TableCell>
          <TableCell align='center'>{node.rowName}</TableCell>
          <TableCell align='right'>{node.total}</TableCell>
          <TableCell align='right'>{node.salary}</TableCell>
          <TableCell align='right'>{node.materials}</TableCell>
          <TableCell align='right'>{node.mainCosts}</TableCell>
          <TableCell align='right'>{node.overheads}</TableCell>
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
