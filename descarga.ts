const BYTES_SLICE = 512;

export interface FileExport {
  statusId: number;
  status: string;
  file: number[];
  fileBase64: string;
  fileName: string;
  filePath: string;
  contentType: 'plain/text';
  errors: Record<string, any>;
}

export const b64toBlob = (b64Data: string) => {
  const blob = new Blob([b64Data], { type: 'text/plain' });
  //const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const exportFile = (data: string, fileName: string) => {
  const fileBlob = b64toBlob(data);
  const link = document.createElement('a');
  const url = URL.createObjectURL(fileBlob);
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log('descargando');
};
