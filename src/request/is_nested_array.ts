import { PropertyMetadata, push } from "@notalk/core";

type IsNestedArrayArgs = {
  readonly type: { new (): unknown };
};

export class IsNestedArrayMetadata extends PropertyMetadata<IsNestedArrayArgs> {}

export const IsNestedArray = (type: { new (): unknown }) => (target: any, name: string) =>
  push(
    target,
    new IsNestedArrayMetadata(
      {
        type,
      },
      name,
    ),
  );
