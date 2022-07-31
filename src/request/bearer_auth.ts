import { PropertyMetadata, push } from "@notalk/core";

type BearerAuthArgs = Record<string, never>;

export class BearerAuthMetadata extends PropertyMetadata<BearerAuthArgs> {}

export const BearerAuth = () => (target: any, name: string) => push(target, new BearerAuthMetadata({}, name));
