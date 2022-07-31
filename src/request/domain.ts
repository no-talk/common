import { ClassMetadata, push } from "@notalk/core";

type DomainArgs = {
  value: string;
};

export class DomainMetadata extends ClassMetadata<DomainArgs> {}

export const Domain = (value: string) => (target: any) =>
  push(
    target.prototype,
    new DomainMetadata({
      value,
    }),
  );
