export interface Usuario {
    nombre: string;
    apellido: string;
    mail: string;
    dNI: string;
    fechaNacimiento: string;
    usuarioID: number;
    rol: boolean | null;
}