import { PropertyMetadata, push } from "@notalk/core";

type IsOneOfArrayArgs = {
  readonly array: readonly unknown[];
};

export class IsOneOfArrayMetadata extends PropertyMetadata<IsOneOfArrayArgs> {}

export const IsOneOfArray = (array: readonly unknown[]) => (target: any, name: string) =>
  push(
    target,
    new IsOneOfArrayMetadata(
      {
        array,
      },
      name,
    ),
  );
