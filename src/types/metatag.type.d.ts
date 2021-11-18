import { DataModel } from "types/common.type";

export interface MetaTagType extends DataModel {
   image? : string;
   title?: string;
   description?: string;
   url?: string;
   titleLength?: number;
   descriptionLength?: number;
   getUrlEmpty?: () => string;

   site_name?: string;
   icon?: string;
   keywords?: string;
}