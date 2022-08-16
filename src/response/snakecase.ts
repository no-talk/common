import { ClassMetadata, push } from "@notalk/core";

type SnakeCaseArgs = Record<string, never>;

export class SnakeCaseMetadata extends ClassMetadata<SnakeCaseArgs> {}

export const SnakeCase = () => (target: any) => push(target.prototype, new SnakeCaseMetadata({}));
