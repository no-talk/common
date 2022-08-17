import { ClassMetadata, push } from "@notalk/core";

const METHOD_LIST = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

type Method = typeof METHOD_LIST[number];

type RequestArgs = {
  method: Method;
  path?: string;
};

export class RequestMetadata extends ClassMetadata<RequestArgs> {}

export const Request = (method: Method, path?: string) => (target: any) =>
  push(
    target.prototype,
    new RequestMetadata({
      method,
      path,
    }),
  );

export const GET = (path?: string) => Request("GET", path);

export const POST = (path?: string) => Request("POST", path);

export const PUT = (path?: string) => Request("PUT", path);

export const PATCH = (path?: string) => Request("PATCH", path);

export const DELETE = (path?: string) => Request("DELETE", path);
