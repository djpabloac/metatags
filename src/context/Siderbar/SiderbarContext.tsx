import { createContext } from "react";
import { SocialNetworkType } from "types/socialnetwork.types";

interface SiderbarContextType {
    selectedSocialNetwork: SocialNetworkType[];
    addSelected: (socialNetwork: SocialNetworkType) => void;
    removeSelected: (socialNetwork: SocialNetworkType) => void;
}

const initialState: SiderbarContextType = {
    selectedSocialNetwork: [],
    addSelected: (socialNetwork) => {},
    removeSelected: (socialNetwork) => {},
}
const SiderbarContext = createContext(initialState);

export default SiderbarContext;