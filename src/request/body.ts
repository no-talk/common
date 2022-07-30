import { PropertyMetadata, push } from "@notalk/core";

type BodyArgs = {
  readonly key?: string;
};

export class BodyMetadata extends PropertyMetadata<BodyArgs> {}

export const Body = (key: string) => (target: any, name: string) =>
  push(
    target,
    new BodyMetadata(
      {
        key,
      },
      name,
    ),
  );
