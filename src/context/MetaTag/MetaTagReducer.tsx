import { MetaTagType } from 'types/metatag.type';

export enum MetaTagActionKind {
    SET_IMAGE = 'SET_IMAGE',
    SET_METATAG = 'SET_METATAG',
}

export interface MetaTagPropertyType {
    property: string;
    value: string;
}

export interface MetaTagAction {
    type: MetaTagActionKind;
    payload: MetaTagType | MetaTagPropertyType | string;
}

export default function MetaTagReducer(state: MetaTagType, action: MetaTagAction): MetaTagType {
    switch (action.type) {
        case MetaTagActionKind.SET_IMAGE:
            let image = action.payload as string;
            return {
                ...state,
                image,
            };
        case MetaTagActionKind.SET_METATAG:
            const fieldProperty = action.payload as MetaTagPropertyType;
            return {
                ...state,
                [fieldProperty.property]: fieldProperty.value,
                [`${fieldProperty.property}Length`]: fieldProperty.value ? fieldProperty.value.length : 0,
            };
        default:
            return state;
    }
}