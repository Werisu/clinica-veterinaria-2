import { Proprietario } from '@clinica-veterinaria-2/owner-data-access';

export type Patient = {
  id: number;
  nome: string;
  fcn: string;
  especie: string;
  raca: string;
  idade: string;
  peso: string;
  sexo: string;
  corPelagem: string;
  dataEntrada: string;
  proprietario: Proprietario;
};
