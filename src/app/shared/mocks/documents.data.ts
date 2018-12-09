import { ListType } from '@app/core/models/user.model';

export const documentTypesList: ListType[] = [
  { code: 'TI', description: 'Tarjeta de Identidad' },
  { code: 'CC', description: 'Cedula de ciudadania' },
  { code: 'CE', description: 'Cedula de extrangeria' },
  { code: 'NIT', description: 'NIT' },
  { code: 'PP', description: 'Pasaporte' },
  { code: 'NUIP', description: 'NUIP' }
];
