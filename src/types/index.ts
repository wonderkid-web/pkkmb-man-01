import { FirestoreError, WithFieldValue } from "firebase/firestore";

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
  }


  export interface FormLogin {
    username?: string;
    NIK?: string;
    password: string;
  }
  

  export type Collections = "registered" | "accounts"

  export interface SignupFormData {
    nik: string;
    name: string;
    password: string;
    phone: string;
  }
  

export interface UseCreateDocResult<T> {
    createDoc: (form: T) => Promise<void>;
  }