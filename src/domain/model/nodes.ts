import { DotObject } from './abstract';
import { attribute, NodeAttributeKey } from '../knowledge';
import { Attributes } from './attributes-base';
import {
  IAttributes,
  ForwardRefNode,
  INode,
  Port,
  NodeAttributes,
  NodeRef,
  NodeRefGroup,
  NodeRefGroupLike,
  NodeRefLike,
} from './types';

/**
 * Node object.
 * @category Domain Model
 */
export class Node extends DotObject implements INode {
  /** Comments to include when outputting with toDot. */
  public comment?: string;
  public readonly attributes: IAttributes<NodeAttributeKey>;
  constructor(public readonly id: string, attributes?: NodeAttributes) {
    super();
    this.attributes = new Attributes<NodeAttributeKey>(attributes);
  }

  /** Returns ForwardRefNode with port and compass specified. */
  public port(port: string | Partial<Port>): ForwardRefNode {
    if (typeof port === 'string') {
      return { id: this.id, port };
    }
    return { id: this.id, ...port };
  }
}

/** @hidden */
export function isForwardRefNode(object: unknown): object is ForwardRefNode {
  return typeof object == 'object' && object !== null && typeof (object as ForwardRefNode).id === 'string';
}

/** @hidden */
export function isNodeRefLike(node: unknown): node is NodeRefLike {
  return typeof node === 'string' || isNodeRef(node);
}

/** @hidden */
export function isNodeRef(node: unknown): node is NodeRef {
  return node instanceof Node || isForwardRefNode(node);
}

/** @hidden */
export function isNodeRefGroupLike(target: NodeRefLike | NodeRefGroupLike): target is NodeRefGroupLike {
  return Array.isArray(target) && target.every(isNodeRefLike);
}

/** @hidden */
export function toNodeRef(target: NodeRefLike): NodeRef {
  if (isNodeRef(target)) {
    return target;
  }
  const [id, port, compass] = target.split(':');
  if (attribute.type.Compass.is(compass)) {
    return { id, port, compass };
  }
  return { id, port };
}

/** @hidden */
export function toNodeRefGroup(targets: NodeRefGroupLike): NodeRefGroup {
  if (targets.length < 2 && (isNodeRefLike(targets[0]) && isNodeRefLike(targets[1])) === false) {
    throw Error('EdgeTargets must have at least 2 elements.');
  }
  return targets.map((t) => toNodeRef(t));
}
