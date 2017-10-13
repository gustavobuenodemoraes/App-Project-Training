export class tipoExercicio implements ItipoExercicio{
    nome: string;
    descricao: string;
    codigo: number;
    
    private lista: Array<any> = [];
    constructor(
    ) { }

    Convert(valor: any) {
        this.lista = valor;
        return this.lista;
    }
}

export interface ItipoExercicio {
    nome: string;
    descricao: string;
    codigo: number;
}