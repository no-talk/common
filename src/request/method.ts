import { ClassMetadata, push } from "@notalk/core";

type MethodArgs = {
  value: string;
};

export class MethodMetadata extends ClassMetadata<MethodArgs> {}

export const Method = (value: string) => (target: any) =>
  push(
    target,
    new MethodMetadata({
      value,
    }),
  );

export const Get = () => Method("GET");

export const Post = () => Method("POST");

export const Put = () => Method("PUT");

export const Patch = () => Method("PATCH");

export const Delete = () => Method("DELETE");
