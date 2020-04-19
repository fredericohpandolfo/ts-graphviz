import React, { FC, ReactElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNode, NodeProps } from '../hooks/use-node';
import { renderId } from '../utils/renderId';

type Props = Omit<NodeProps, 'label'> & {
  label?: ReactElement | string;
};

export const Node: FC<Props> = ({ children, label, ...props }) => {
  const renderedLabel = useMemo(() => renderId(label), [label]);
  if (renderedLabel !== undefined) Object.assign(props, { label: renderedLabel });
  useNode(props);
  return <>{children}</>;
};

Node.displayName = 'Node';

Node.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Node.defaultProps = {
  comment: undefined,
  label: undefined,
};
