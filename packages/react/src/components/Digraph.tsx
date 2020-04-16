import React, { FC, useMemo } from 'react';
import PropTypes from 'prop-types';
import * as gv from 'ts-graphviz';
import { RootClusterContext } from '../contexts/RootClusterContext';
import { ClusterContext } from '../contexts/ClusterContext';
import { useGraphvizContext } from '../hooks/useContext';

export const Digraph: FC = ({ children }) => {
  const context = useGraphvizContext();
  const g = useMemo(() => new gv.Digraph(context), [context]);
  return (
    <RootClusterContext.Provider value={g}>
      <ClusterContext.Provider value={g}>{children}</ClusterContext.Provider>
    </RootClusterContext.Provider>
  );
};

Digraph.displayName = 'Digraph';

Digraph.defaultProps = {
  children: null,
};

Digraph.propTypes = {
  children: PropTypes.any,
};
