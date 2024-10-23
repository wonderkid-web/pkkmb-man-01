"use client";
import { database } from "@/libs/firebase";
import { Collections, FormData, UseCreateDocResult } from "@/types";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  SnapshotOptions,
  FirestoreDataConverter,
  WithFieldValue,
  DocumentData,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Contoh FirestoreDataConverter untuk tipe data T
const converter = <T extends DocumentData>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>): DocumentData => {
    return data;
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): T => {
    const data = snapshot.data(options)!;
    return data as T;
  },
});

export function useGetDocs<T extends DocumentData>(coll: Collections) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const collData = collection(database, coll).withConverter(converter<T>());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = await getDocs(collData);
        const boxData = raw.docs.map((doc) => doc.data());
        setData(boxData);
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching Data:", err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
}

export function useCreateDoc<T extends DocumentData>(
  coll: Collections
): UseCreateDocResult<T> {
  const collData = collection(database, coll).withConverter(converter<T>());

  const createDoc = async (form: T) => {
    try {
      toast.info("Membuat Akun..");
      if (!form) throw new Error("Form is empty");

      // @ts-ignore
      await addDoc(collData, form);
    } catch (err) {
      toast.error("Error creating document:" + err);
      console.error("Error creating document:", err);
    } finally {
      toast.success("Signup Selesai");
    }
  };

  return { createDoc };
}

export function useGetDoc<FormData extends DocumentData>(nik: FormData["nik"]) {
  const [data, setData] = useState<FormData | null>();
  const [error, setError] = useState<Error | null>(null);

  // const collData = collection(database, coll).withConverter(
  //   converter<FormData>()
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(nik)
        const docRef = doc(database, "form_pendaftaran", nik);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data() as FormData);
        } else {
          // docSnap.data() will be undefined in this case
          throw Error("No such document!");
        }
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching Data:", err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
}

export function useCreateForm(): UseCreateDocResult<FormData> {
  const collData = collection(database, "form_pendaftaran").withConverter(
    converter<FormData>()
  );

  const createForm = async (form: FormData) => {
    try {
      toast.info("Proses Upload Form Pendaftaran..");
      if (!form) throw new Error("Form Kosong!");

      console.log(form)

      // @ts-ignore
      const newDocRef = doc(collData, form.nik);
      await setDoc(newDocRef, form);
      toast.success("Upload Form Berhasil!");
    } catch (err) {
      toast.error("Error Saat Mengupload Form:" + err);
      console.error("Error Saat Mengupload Form:", err);
    }
  };

  return { createForm };
}

export function useMarkAsDone(){

}
