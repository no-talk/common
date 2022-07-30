import { ClassMetadata, push } from "@notalk/core";

type StatusCodeArgs = {
  value: number;
};

export class StatusCodeMetadata extends ClassMetadata<StatusCodeArgs> {}

export const StatusCode = (value: number) => (target: any) =>
  push(
    target.prototype,
    new StatusCodeMetadata({
      value,
    }),
  );
