import { PropertyMetadata, push } from "@notalk/core";

type ResponseBodyArgs = Record<string, never>;

export class ResponseBodyMetadata extends PropertyMetadata<ResponseBodyArgs> {}

export const ResponseBody = () => (target: any, name: string) => push(target, new PropertyMetadata({}, name));
