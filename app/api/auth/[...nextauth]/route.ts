import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "%utils/database";
import User from "%models/user";
import { DefaultSession } from "next-auth";


// module augmentation for next-auth with typescript -- adds id property to the default session
// https://stackoverflow.com/questions/76160535/why-cant-i-extract-the-id-from-my-session-user-serverside-in-nextjs-13

declare module "next-auth" {
    interface Session{
        user?:{
            id: string;
        } & DefaultSession["user"];
    }
}

const handler = NextAuth({
    providers : [GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET
    })],
    callbacks: {
        async session({ session }){
            const sessionUser = await User.findOne({
                email:session.user.email
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile}){
            try {
                await connectToDB();
                //check if user already exists?
                const userExists = await User.findOne({ email: profile.email });
                //create user if not already exist
                if (!userExists){
                    User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", ""),
                        image: profile.image
                    });
                }
                return true
            }
            catch(error){
                console.error(error);
                return false
            }
        }
    }
})

export {handler as GET, handler as POST}