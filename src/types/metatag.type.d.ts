import { DataModel } from "types/common.type";

export interface MetaTagType extends DataModel {
   image? : string;
   title?: string;
   description?: string;
   url?: string;
   titleLength?: number;
   descriptionLength?: number;
}