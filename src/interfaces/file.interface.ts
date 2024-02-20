export interface IFile {
    url: string
}

export interface IDocumentPickerFile {
    name: string;
    size?: number | undefined;
    uri: string;
    mimeType?: string | undefined;
    lastModified?: number | undefined;
    file?: File | undefined;
}

export interface IMulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
}