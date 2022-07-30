import { PropertyMetadata, push } from "@notalk/core";

type IsNestedArgs = {
  readonly type: { new (): unknown };
};

export class IsNestedMetadata extends PropertyMetadata<IsNestedArgs> {}

export const IsNested = (type: { new (): unknown }) => (target: any, name: string) =>
  push(
    target,
    new IsNestedMetadata(
      {
        type,
      },
      name,
    ),
  );
