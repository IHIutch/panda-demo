/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { PropertyValue } from '../types/prop-type';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface SpaceYProperties {
   reverse?: ConditionalValue<boolean>
	space?: ConditionalValue<Tokens["spacing"] | Properties["margin"]>
}


interface SpaceYStyles extends SpaceYProperties, DistributiveOmit<SystemStyleObject, keyof SpaceYProperties > {}

interface SpaceYPatternFn {
  (styles?: SpaceYStyles): string
  raw: (styles?: SpaceYStyles) => SystemStyleObject
}

/** Space a vertical list from the parent container without using flex */
export declare const spaceY: SpaceYPatternFn;
