import { createContext } from "react";
import { MetaTagType } from 'types/metatag.type';

interface MetaTagContextType {
    MetaTagField: MetaTagType;
    setMetaTag: (property: string, value: string) => void;
    loadMetaTag: (MetaTagField: MetaTagType) => void;
}

const initialState: MetaTagContextType = {
    MetaTagField: {},
    setMetaTag: (property, value) => {},
    loadMetaTag: (MetaTagField) => {},
}
const MetaTagContext = createContext(initialState);

export default MetaTagContext;