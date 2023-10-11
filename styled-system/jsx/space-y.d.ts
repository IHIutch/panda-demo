/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SpaceYProperties } from '../patterns/space-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SpaceYProps extends SpaceYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SpaceYProperties > {}

/** Space a vertical list from the parent container without using flex */
export declare const SpaceY: FunctionComponent<SpaceYProps>