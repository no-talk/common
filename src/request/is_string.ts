import { PropertyMetadata, push } from "@notalk/core";

type IsStringArgs = Record<string, never>;

export class IsStringMetadata extends PropertyMetadata<IsStringArgs> {}

export const IsString = () => (target: any, name: string) => push(target, new IsStringMetadata({}, name));
