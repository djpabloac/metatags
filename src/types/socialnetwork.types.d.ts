import { DataModel } from "types/common.type";

export interface SocialNetworkType extends DataModel {
    name: string;
    logo: string;
    disabled: boolean;
    checked: boolean;
}

export interface SidebarType extends DataModel {
    caption: string;
    socialNetwork: SocialNetworkType[]
}