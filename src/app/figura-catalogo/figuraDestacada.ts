import { Figura } from "./figura";

export interface FiguraDestacada extends Figura{
    materiales: string;
    descripcion: string;
}