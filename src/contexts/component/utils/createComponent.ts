import { DIMENSION_TYPE } from "@constants/components.constant";
import { Component, Dimension } from "@contexts/interfaces/components.interface"
import { DEPTH } from "@enums/positions.enum";

export interface CreateComponentParams<T> {
  items: T[];
  depth: DEPTH;
  dimensions: DIMENSION_TYPE;
}

export function createComponent<ParameterType>({ items, depth, dimensions }: CreateComponentParams<ParameterType>): Component<ParameterType> {
  const [widthDimension, heightDimension, depthDimension] = dimensions
  const dimension: Dimension = {
    width: widthDimension, height: heightDimension, depth: depthDimension
  }

  const quantity = items.length

  return { depth, dimension, quantity, items }
}