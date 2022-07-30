import { PropertyMetadata, push } from "@notalk/core";

type RequiredArgs = Record<string, never>;

export class RequiredMetadata extends PropertyMetadata<RequiredArgs> {}

export const Required = () => (target: any, name: string) => push(target, new RequiredMetadata({}, name));
