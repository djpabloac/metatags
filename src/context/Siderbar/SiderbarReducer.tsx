import { SocialNetworkType } from "types/socialnetwork.types";

export enum SiderbarTypeKind {
    ADD_SOCIALNETWORK = 'ADD_SOCIALNETWORK',
    REMOVE_SOCIALNETWORK = 'REMOVE_SOCIALNETWORK',
}

export interface SiderbarAction {
    type: SiderbarTypeKind;
    payload: SocialNetworkType;
}

const sortSocialNetwork = (a: SocialNetworkType, b: SocialNetworkType) => {
    let a1 = a._id || '0';
    let b1 = b._id || '0';
    if (a1 > b1) return 1;
    if (a1 < b1) return -1;
    return 0;
}
export default function SiderbarReducer(state: SocialNetworkType[], action: SiderbarAction): SocialNetworkType[] {
    switch (action.type) {
        case SiderbarTypeKind.ADD_SOCIALNETWORK:
            if (state.includes(action.payload))
                return state;

            return [
                ...state.concat(action.payload).sort(sortSocialNetwork),
            ]
        case SiderbarTypeKind.REMOVE_SOCIALNETWORK:
            return [
                ...state.filter(s => s._id !== action.payload._id).sort(sortSocialNetwork),
            ];
        default:
            return state.sort(sortSocialNetwork);
    }
}