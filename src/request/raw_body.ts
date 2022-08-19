import { PropertyMetadata, push } from "@notalk/core";

type RawBodyArgs = Record<string, never>;

export class RawBodyMetadata extends PropertyMetadata<RawBodyArgs> {}

export const RawBody = () => (target: any, name: string) => push(target, new RawBodyMetadata({}, name));
