import { ClassMetadata, push } from "@notalk/core";

const METHOD_LIST = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

type Method = typeof METHOD_LIST[number];

type EndpointArgs = {
  method: Method;
  path: string;
};

export class EndpointMetadata extends ClassMetadata<EndpointArgs> {}

export const Endpoint = (method: Method, path: string) => (target: any) =>
  push(
    target.prototype,
    new EndpointMetadata({
      method,
      path,
    }),
  );

export const Get = (path: string) => Endpoint("GET", path);

export const Post = (path: string) => Endpoint("POST", path);

export const Put = (path: string) => Endpoint("PUT", path);

export const Patch = (path: string) => Endpoint("PATCH", path);

export const Delete = (path: string) => Endpoint("DELETE", path);
