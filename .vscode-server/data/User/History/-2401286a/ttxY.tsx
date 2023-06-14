import { FC } from "react";
import { getFirstLetters } from "../../../utils/helpers";

type Props = {
    name: string;
}

export const Avatar: FC<Props> = ({ name }) => {
    const firstLetters = getFirstLetters(name);
    
}