import { GetServerSideProps, GetServerSidePropsContext } from "next";


export const validateCookies = (context: GetServerSidePropsContext) => {
    //The session id is obtained from the cookie of the request object
    const sessionID = context.req.cookies["connect.sid"];
    //Return an object with cookie if true else returns false
    return sessionID ? ({ Cookie: `connect.sid=${sessionID}` }) : false;
}

export const getFirstLetters = (word: string) => {
    //Splits the word on space
    const splitWords = word.split(" ");
    if(splitWords.length>2){
        //If the word is 
    }
    //Filters the word for first letter
    const firstLetters = splitWords.map((word) => {
        return word[0];
    })
    return firstLetters;
}