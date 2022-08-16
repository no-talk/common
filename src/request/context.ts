import { PropertyMetadata, push } from "@notalk/core";

type ContextArgs = {
  readonly key?: string;
};

export class ContextMetadata extends PropertyMetadata<ContextArgs> {}

export const Context = (key: string) => (target: any, name: string) =>
  push(
    target,
    new ContextMetadata(
      {
        key,
      },
      name,
    ),
  );
