import { PropertyMetadata, push } from "@notalk/core";

type IsNumberArrayArgs = Record<string, never>;

export class IsNumberArrayMetadata extends PropertyMetadata<IsNumberArrayArgs> {}

export const IsNumberArray = () => (target: any, name: string) => push(target, new IsNumberArrayMetadata({}, name));
