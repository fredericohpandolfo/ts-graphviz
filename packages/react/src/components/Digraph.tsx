import React, { FC } from 'react';
import * as gv from 'ts-graphviz';
import { ClusterContext } from '../contexts/ClusterContext';
import { GraphvizContext } from '../contexts/GraphvizContext';

export const Digraph: FC = ({ children }) => {
  const g = new gv.Digraph();
  return (
    <GraphvizContext.Provider value={g}>
      <ClusterContext.Provider value={g}>{children}</ClusterContext.Provider>
    </GraphvizContext.Provider>
  );
};
