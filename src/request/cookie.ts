import { PropertyMetadata, push } from "@notalk/core";

type CookieArgs = {
  readonly key: string;
};

export class CookieMetadata extends PropertyMetadata<CookieArgs> {}

export const Cookie = (key: string) => (target: any, name: string) =>
  push(
    target,
    new CookieMetadata(
      {
        key,
      },
      name,
    ),
  );
