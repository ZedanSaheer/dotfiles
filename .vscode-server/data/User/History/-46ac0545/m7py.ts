import passport from "passport";
import { Profile } from "passport-discord";
import { Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
import { User } from '../database/schemas/index'

passport.use(
    new Strategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            callbackURL: process.env.DISCORD_CLIENT_REDIRECT!,
            scope: ['identify', 'email', 'guilds']
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
            const { id: discordId } = profile;

            //Check for existing user from the discord user ID
            const existingUser = User.findOneAndUpdate({ discordId },{accessToken,refreshToken}
                ,{
                    options:{
                        new
                    }
                })
        }
    )
)