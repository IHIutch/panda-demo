/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SpaceXProperties } from '../patterns/space-x';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SpaceXProps extends SpaceXProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SpaceXProperties > {}

/** Space a horizontal list from the parent container without using flex */
export declare const SpaceX: FunctionComponent<SpaceXProps>