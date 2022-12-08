import { DEPTH } from "@enums/positions.enum";
import { DIMENSION_TYPE, } from "@constants/components.constant";
import { Component, Dimension } from "@contexts/position/functions/definePositionsComponents";

interface ComponentDTO<T> {
  items: T[];
  depth: DEPTH;
  dimensions: DIMENSION_TYPE;
}

export function componentDTO<ParameterType>({ items, depth, dimensions }: ComponentDTO<ParameterType>): Component<ParameterType> {
  const [widthDimension, heightDimension, depthDimension] = dimensions
  const dimension: Dimension = {
    width: widthDimension, height: heightDimension, depth: depthDimension
  }

  const quantity = items.length

  return { depth, dimension, quantity, items }
}

