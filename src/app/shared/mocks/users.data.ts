import { User } from '@app/core/models/user.model';

export const mockUsersData: User[] = [
  {
    name: 'Cristopher Villegas',
    documentType: { code: 'CC', description: 'CEDULA DE CIUDADANIA' },
    document: '1234567890',
    email: 'alejandro201@gmail.com',
    phone: '+57 345 544 22 44',
    location: {
      country: { code: 'CO', description: 'Colombia' },
      department: { code: 'ANQ', description: 'Antioquia' },
      city: 'Medellin'
    },
    tutor: {
      documentType: { code: 'CC', description: 'CEDULA DE CIUDADANIA' },
      document: '987654321',
      name: 'Alejandro Suarez',
      phone: '+57 300 555 44 21'
    }
  },
  {
    name: 'Kevin Rodriguez',
    documentType: { code: 'CC', description: 'CEDULA DE CIUDADANIA' },
    document: '846565665',
    email: 'kevin@gmail.com',
    phone: '+57 456 11 24',
    location: {
      country: { code: 'CO', description: 'Colombia' },
      department: { code: 'ANQ', description: 'Antioquia' },
      city: 'Bello'
    }
  },
  {
    name: 'Maria Perez',
    documentType: { code: 'CC', description: 'CEDULA DE CIUDADANIA' },
    document: '654123546',
    email: 'maria.perez@gmail.com',
    phone: '+57 654 42 21',
    location: {
      country: { code: 'CO', description: 'Colombia' },
      department: { code: 'ANQ', description: 'Antioquia' },
      city: 'Envigado'
    },
    tutor: {
      documentType: { code: 'PP', description: 'PASAPORTE' },
      document: '546213125',
      name: 'Isaac Spinoza',
      phone: '+57 300 555 44 21'
    }
  }
];
