import { GetServerSideProps, GetServerSidePropsContext } from "next";


export const validateCookies = (context : GetServerSidePropsContext) => {
    const sessionID = context.req
}