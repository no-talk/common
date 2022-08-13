import { PropertyMetadata, push } from "@notalk/core";

type PrincipalIdArgs = Record<string, never>;

export class PrincipalIdMetadata extends PropertyMetadata<PrincipalIdArgs> {}

export const PrincipalId = () => (target: any, name: string) => push(target, new PrincipalIdMetadata({}, name));
