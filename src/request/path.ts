import { PropertyMetadata, push } from "@notalk/core";

type PathArgs = {
  readonly key: string;
};

export class PathMetadata extends PropertyMetadata<PathArgs> {}

export const Path = (key: string) => (target: any, name: string) =>
  push(
    target,
    new PathMetadata(
      {
        key,
      },
      name,
    ),
  );
