import { ClassMetadata, push } from "@notalk/core";

type RequestArgs = {
  value: string;
};

export class RequestMetadata extends ClassMetadata<RequestArgs> {}

export const Request = (value: string) => (target: any) =>
  push(
    target.prototype,
    new RequestMetadata({
      value,
    }),
  );
