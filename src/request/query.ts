import { PropertyMetadata, push } from "@notalk/core";

type QueryArgs = {
  readonly key: string;
};

export class QueryMetadata extends PropertyMetadata<QueryArgs> {}

export const Query = (key: string) => (target: any, name: string) =>
  push(
    target,
    new QueryMetadata(
      {
        key,
      },
      name,
    ),
  );
