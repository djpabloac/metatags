import { useReducer } from "react";
import { SocialNetworkType } from "types/socialnetwork.types";
import SiderbarReducer, {
    SiderbarTypeKind,
} from "context/Siderbar/SiderbarReducer";
import SiderbarContext from "context/Siderbar/SiderbarContext";

const SiderbarState = ({ children }: {children: JSX.Element | string }) => {

    const initialState: SocialNetworkType[] = [];

    const [state, dispatch] = useReducer(SiderbarReducer, initialState,)

    const addSelected = (socialNetwork: SocialNetworkType) => {
        dispatch({
            type: SiderbarTypeKind.ADD_SOCIALNETWORK,
            payload: socialNetwork,
        });
    }

    const removeSelected = (socialNetwork: SocialNetworkType) => {
        dispatch({
            type: SiderbarTypeKind.REMOVE_SOCIALNETWORK,
            payload: socialNetwork,
        });
    }

    return (
        <SiderbarContext.Provider value={{
            selectedSocialNetwork: state as SocialNetworkType[],
            addSelected,
            removeSelected,
        }}>
            {children}
        </SiderbarContext.Provider>
    )
}

export default SiderbarState;