import { ItipoExercicio } from './../../exercicios/exercicios.model';
export class listaExercicios {
    constructor(
        public treinamento?: string,
        public exercicio?: ItipoExercicio,
        public serie?: number,
        public repeticao?: number,
        public id?: number
    ) {

    }

}