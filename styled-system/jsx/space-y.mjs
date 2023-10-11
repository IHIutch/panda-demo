import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getSpaceYStyle } from '../patterns/space-y.mjs';

export const SpaceY = /* @__PURE__ */ forwardRef(function SpaceY(props, ref) {
  const { reverse, space, ...restProps } = props
const styleProps = getSpaceYStyle({reverse, space})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})