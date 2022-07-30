import { PropertyMetadata, push } from "@notalk/core";

type SnakeCaseArgs = Record<string, never>;

export class SnakeCaseMetadata extends PropertyMetadata<SnakeCaseArgs> {}

export const SnakeCase = () => (target: any, name: string) => push(target, new SnakeCaseMetadata({}, name));
