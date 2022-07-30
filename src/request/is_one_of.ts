import { PropertyMetadata, push } from "@notalk/core";

type IsOneOfArgs = {
  readonly array: readonly unknown[];
};

export class IsOneOfMetadata extends PropertyMetadata<IsOneOfArgs> {}

export const IsOneOf = (array: readonly unknown[]) => (target: any, name: string) =>
  push(
    target,
    new IsOneOfMetadata(
      {
        array,
      },
      name,
    ),
  );
