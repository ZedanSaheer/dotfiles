import passport from "passport";
import { Profile } from "passport-discord";
import { Strategy } from "passport-discord";

passport.use(
    new Strategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            callbackURL: process.env.REDIRECT,
            scope: ['identify', 'email', 'guilds']
        },
j)