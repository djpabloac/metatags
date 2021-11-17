import { SocialNetworkType } from "types/socialnetwork.types";

export enum SiderbarTypeKind {
    ADD_SOCIALNETWORK = 'ADD_SOCIALNETWORK',
    REMOVE_SOCIALNETWORK = 'REMOVE_SOCIALNETWORK',
}

export interface SiderbarAction {
    type: SiderbarTypeKind;
    payload: SocialNetworkType;
}

export default function SiderbarReducer(state: SocialNetworkType[], action: SiderbarAction): SocialNetworkType[] {
    switch (action.type) {
        case SiderbarTypeKind.ADD_SOCIALNETWORK:
            if(state.includes(action.payload))
                return state;

            return [
                ...state.concat(action.payload),
            ]
        case SiderbarTypeKind.REMOVE_SOCIALNETWORK:
            return [
                ...state.filter(s => s._id !== action.payload._id),
            ];
        default:
            return state;
    }
}