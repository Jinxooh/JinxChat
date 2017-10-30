import users from './users';

const databaseHelper = (() => {
  return {
    initialize: (database) => {
      users.initialize(database);
    }
  }
})();

export default databaseHelper;