import { GetServerSideProps, GetServerSidePropsContext } from "next";


export const validateCookies = (context : GetServerSidePropsContext) => {
    //The session id is obtained from the cookie of the request object
    const sessionID = context.req.cookies["connect.sid"];
    return sessionID ? ({Cookie : `connect.sid=${sessionID}`}) : false;
}