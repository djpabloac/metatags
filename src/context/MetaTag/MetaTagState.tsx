import { useReducer } from "react";
import { MetaTagType } from 'types/metatag.type';
import MetaTagReducer, {
    MetaTagActionKind,
 } from "context/MetaTag/MetaTagReducer";
import MetaTagContext from "context/MetaTag/MetaTagContext";


const MetaTagState = ({ children }: { children: JSX.Element | string }) => {

    const initialState: MetaTagType = {
        title: '',
        description: '',
        url: 'https://metatags.io'
    };
    initialState.titleLength = initialState.title ? initialState.title.length : 0;
    initialState.descriptionLength = initialState.description ? initialState.description.length : 0;

    const [state, dispatch] = useReducer(MetaTagReducer, initialState,);

    const loadMetaTag = (MetaTagField: MetaTagType) => {
        dispatch({
            type: MetaTagActionKind.LOAD_METATAG,
            payload: MetaTagField,
        })
    }

    const setMetaTag = (property: string, value: string) => {
        dispatch({
            type: MetaTagActionKind.SET_METATAG,
            payload: {
                property,
                value,
            }
        })
    }

    return (
        <MetaTagContext.Provider value={{
            MetaTagField: state as MetaTagType,
            setMetaTag,
            loadMetaTag,
        }}>
            {children}
        </MetaTagContext.Provider>
    )
}

export default MetaTagState;