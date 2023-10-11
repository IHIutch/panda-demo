import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getSpaceXStyle } from '../patterns/space-x.mjs';

export const SpaceX = /* @__PURE__ */ forwardRef(function SpaceX(props, ref) {
  const { reverse, space, ...restProps } = props
const styleProps = getSpaceXStyle({reverse, space})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})