import { NumberLiteralTypeAnnotation } from "@babel/types";

export type RowId = number;

export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}