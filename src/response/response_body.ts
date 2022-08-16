import { PropertyMetadata, push } from "@notalk/core";

type ResponseBodyArgs = {
  readonly type: { new (): unknown };
};

export class ResponseBodyMetadata extends PropertyMetadata<ResponseBodyArgs> {}

export const ResponseBody = (type: { new (): unknown }) => (target: any, name: string) =>
  push(
    target,
    new ResponseBodyMetadata(
      {
        type,
      },
      name,
    ),
  );
