import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        {
            id: ""
        }
    ]
}
export default NextAuth(authOptions)