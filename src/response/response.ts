import { ClassMetadata, push } from "@notalk/core";

type ResponseArgs = {
  value: number;
};

export class ResponseMetadata extends ClassMetadata<ResponseArgs> {}

export const Response = (value: number) => (target: any) =>
  push(
    target.prototype,
    new ResponseMetadata({
      value,
    }),
  );
