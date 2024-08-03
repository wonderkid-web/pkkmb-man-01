import { database } from "@/libs/firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        // @ts-ignore
        if (credentials) {
          //  console.log(credentials)
          // @ts-ignore
          if (!credentials.NIK.includes("admin")) {
            const coll = collection(database, "accounts");

            const q = query(
              coll,
              // @ts-ignore
              where("nik", "==", credentials.NIK),
              // @ts-ignore
              where("password", "==", credentials.password)
            );

            const rawDoc = await getDocs(q);

            const user = rawDoc.docs.map((d) => d.data());

            // Add logic here to look up the user from the credentials supplied

            if (!rawDoc.empty) {
              // Any object returned will be saved in `user` property of the JWT
              return { ...user, role: "siswa" };
            }
          } else {
            if (
              // @ts-ignore
              credentials.NIK === "admin" &&
              credentials.password === "admin123"
            ) {
              return {
                name: "admin",
                role: "admin",
              };
            }
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        console.log("JWT")
      }
      return token;
    },

    async session({ session, token }) {
      console.log("session")
      if(token){
        session.user = token;
      }

      return session;
    },
  },
};
