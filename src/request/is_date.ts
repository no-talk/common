import { PropertyMetadata, push } from "@notalk/core";

type IsDateArgs = Record<string, never>;

export class IsDateMetadata extends PropertyMetadata<IsDateArgs> {}

export const IsDate = () => (target: any, name: string) => push(target, new IsDateMetadata({}, name));
