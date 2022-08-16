import { PropertyMetadata, push } from "@notalk/core";

type DomainArgs = Record<string, never>;

export class DomainMetadata extends PropertyMetadata<DomainArgs> {}

export const Domain = () => (target: any, name: string) => push(target, new DomainMetadata({}, name));
