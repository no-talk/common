import { PropertyMetadata, push } from "@notalk/core";

type IsNumberArgs = Record<string, never>;

export class IsNumberMetadata extends PropertyMetadata<IsNumberArgs> {}

export const IsNumber = () => (target: any, name: string) => push(target, new IsNumberMetadata({}, name));
