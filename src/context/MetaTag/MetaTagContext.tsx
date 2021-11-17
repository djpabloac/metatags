import { createContext } from "react";
import { MetaTagType } from 'types/metatag.type';

interface MetaTagContextType {
    MetaTagField: MetaTagType;
    fontGenerator: () => void;
    setMetaTag: (property: string, value: string) => void;
}

const initialState: MetaTagContextType = {
    MetaTagField: {},
    fontGenerator: () => {} ,
    setMetaTag: (property, value) => {},
}
const MetaTagContext = createContext(initialState);

export default MetaTagContext;