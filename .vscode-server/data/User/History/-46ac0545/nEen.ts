import passport from "passport";
import { Profile } from "passport-discord";
import { Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";

passport.use(
    new Strategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            callbackURL: process.env.DISCORD_CLIENT_REDIRECT!,
            scope: ['identify', 'email', 'guilds','application.commands']
        },
        async (accessToken: string, refreshToken: string, profile: Profile , done : VerifyCallback) => {
            console.log(accessToken,refreshToken,profile,done); 
        }
    )
)