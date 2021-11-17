import { useReducer } from "react";
import { MetaTagType } from 'types/metatag.type';
import MetaTagReducer, {
    MetaTagActionKind,
 } from "context/MetaTag/MetaTagReducer";
import MetaTagContext from "context/MetaTag/MetaTagContext";


const MetaTagState = ({ children }: { children: JSX.Element | string }) => {
    const initialState: MetaTagType = {
        image: '/assets/metatagdetail.png',
        title: 'Meta Tags — Preview, Edit and Generate',
        description: 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!',
        url: 'https://metatags.io',
        titleLength: 'Meta Tags — Preview, Edit and Generate'.length,
        descriptionLength: 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'.length,
    };

    const [state, dispatch] = useReducer(MetaTagReducer, initialState,);

    const fontGenerator = () => {
        console.log('fontGenerator');
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
            fontGenerator,
            setMetaTag,
        }}>
            {children}
        </MetaTagContext.Provider>
    )
}

export default MetaTagState;