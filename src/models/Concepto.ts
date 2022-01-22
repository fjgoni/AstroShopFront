import { Usuario } from "../models/Usuario";

export class Concepto {
    NombreConcepto: string;
    DescripcionConcepto: string;
    Precio: number;
    Stock: number;
    Vendedor: Usuario;
    VendedorID: number;
    Imagen: string;
    ConceptoID: number;
}