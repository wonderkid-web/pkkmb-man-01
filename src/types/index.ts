
export interface FormData {
    name: string;
    birthDate: string;
    placeBirthDate: string;
    religion: string;
    address: string;
    phone: string;
    grade: string;
    specialization: string;
    motherName: string;
    motherBirthDate: string;
    motherPlaceBirth: string;
    motherEducation: string;
    motherOccupation: string;
    motherParentPhone: string;
    fatherName: string;
    fatherBirthDate: string;
    fatherPlaceBirth: string;
    fatherEducation: string;
    fatherOccupation: string;
    parentAddress: string;
    fatherParentPhone: string;
    certificateCopy: string;
    birthCertificateCopy: string;
    familyCardCopy: string;
    photo: string;
    gender: "laki-laki" | "perempuan";
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