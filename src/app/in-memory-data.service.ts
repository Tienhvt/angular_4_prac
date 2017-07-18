import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const engineers = [
      { id: 1,  firstName: 'John', lastName: 'Done', programing: 'Java', dateOfBirth: '1986-07-12' },
      { id: 2,  firstName: 'Ethan', lastName: 'Hunt', programing: 'PHP', dateOfBirth: '1987-06-04' },

    ];
    return {engineers};
  }
}
