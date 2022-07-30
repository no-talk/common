import { PropertyMetadata, push } from "@notalk/core";

type OptionalArgs = Record<string, never>;

export class OptionalMetadata extends PropertyMetadata<OptionalArgs> {}

export const Optional = () => (target: any, name: string) => push(target, new OptionalMetadata({}, name));
