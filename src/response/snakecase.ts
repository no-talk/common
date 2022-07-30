import { PropertyMetadata, push } from "@notalk/core";

type SnakeCaseArgs = Record<string, never>;

export class SnakecaseMetadata extends PropertyMetadata<SnakeCaseArgs> {}

export const Snakecase = () => (target: any, name: string) => push(target, new SnakecaseMetadata({}, name));
