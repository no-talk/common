import { PropertyMetadata, push } from "@notalk/core";

type HeaderArgs = {
  readonly key: string;
};

export class HeaderMetadata extends PropertyMetadata<HeaderArgs> {}

export const Header = (key: string) => (target: any, name: string) =>
  push(
    target,
    new HeaderMetadata(
      {
        key,
      },
      name,
    ),
  );
