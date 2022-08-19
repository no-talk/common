import { PropertyMetadata, push } from "@notalk/core";

type FilesArgs = Record<string, never>;

export class FilesMetadata extends PropertyMetadata<FilesArgs> {}

export const Files = () => (target: any, name: string) => push(target, new FilesMetadata({}, name));
