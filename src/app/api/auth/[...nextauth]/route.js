import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [

    // login by email and password
    CredentialsProvider({
      async authorize (userInfo){
        // define abject structure
        userInfo = {
          email: userInfo.email,
          password: userInfo.password,
        }
        // call login services
        const login = await loginService(userInfo);
        return login;
      },
    }),
  ],

  // used to set token into cookies
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = nextAuth(authOption);
export {handler as GET, handler as POST };

