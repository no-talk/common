import { PropertyMetadata, push } from "@notalk/core";

type IsBooleanArrayArgs = Record<string, never>;

export class IsBooleanArrayMetadata extends PropertyMetadata<IsBooleanArrayArgs> {}

export const IsBooleanArray = () => (target: any, name: string) => push(target, new IsBooleanArrayMetadata({}, name));
