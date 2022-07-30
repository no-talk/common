import { PropertyMetadata, push } from "@notalk/core";

type IsMatchedArgs = {
  readonly regex: RegExp;
};

export class IsMatchedMetadata extends PropertyMetadata<IsMatchedArgs> {}

export const IsMatched = (regex: RegExp) => (target: any, name: string) =>
  push(
    target,
    new IsMatchedMetadata(
      {
        regex,
      },
      name,
    ),
  );

export const IsEmail = () =>
  IsMatched(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
