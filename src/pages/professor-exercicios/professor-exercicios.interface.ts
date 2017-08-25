export interface Musculo{
    nome: String
}

export interface ProfessorExercicios{
    nome: String
    descricao: String
    linkVideo: String
    musculoPrincipal?: Musculo
    musculoSinergistal?: Musculo
}