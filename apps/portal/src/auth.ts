import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { db, usersTable } from "@repo/db"
import { eq } from "@repo/db/drizzle-orm"



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn: async (params) => {
      const user = await db.select().from(usersTable).where(eq(usersTable.email, params.user.email))

      if (user.length === 0) {
        await db.insert(usersTable).values({
          email: params.user.email || "",
          name: params.user.name || "",
        })
      }

      return true
    }
  }
})