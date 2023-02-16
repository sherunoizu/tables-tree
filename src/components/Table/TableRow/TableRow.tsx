import React from 'react';

export const TableRow = ({ node }: { node: ITable }) => (
  <div>
    <p>{node.id}</p>
    {node.child && node.child.map((childNode) => <TableRow node={childNode} key={childNode.id} />)}
  </div>
);
