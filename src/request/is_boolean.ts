import { PropertyMetadata, push } from "@notalk/core";

type IsBooleanArgs = Record<string, never>;

export class IsBooleanMetadata extends PropertyMetadata<IsBooleanArgs> {}

export const IsBoolean = () => (target: any, name: string) => push(target, new IsBooleanMetadata({}, name));
