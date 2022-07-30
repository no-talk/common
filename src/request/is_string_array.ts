import { PropertyMetadata, push } from "@notalk/core";

type IsStringArrayArgs = Record<string, never>;

export class IsStringArrayMetadata extends PropertyMetadata<IsStringArrayArgs> {}

export const IsStringArray = () => (target: any, name: string) => push(target, new IsStringArrayMetadata({}, name));
