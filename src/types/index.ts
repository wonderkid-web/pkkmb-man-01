
export interface FormData {
    name: string;
    birthDate: string;
    religion: string;
    address: string;
    phone: string;
    grade: string;
    specialization: string;
    fatherName: string;
    motherName: string;
    fatherBirthDate: string;
    education: string;
    occupation: string;
    parentAddress: string;
    parentPhone: string;
    certificateCopy: string;
    birthCertificateCopy: string;
    familyCardCopy: string;
    photo: string;
    others: string;
    nik: string;
    status: boolean;
    docsUrl: [string, string, string, string] 
  }


  export interface User {
    username?: string;
    NIK?: string;
    password: string;
  }
  

  export type Collections = "accounts" | "form_pendaftaran"

  export interface SignupFormData {
    nik: string;
    name: string;
    password: string;
    phone: string;
  }
  

export interface UseCreateDocResult<T> {
    createDoc?: (form: T) => Promise<void>;
    createForm?: (form: T) => Promise<void>;

  }

export interface File {
  name: string;
  file: string | ArrayBuffer | null;
}