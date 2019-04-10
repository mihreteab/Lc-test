import app from './app';
import github from './github';
import user from './user';
import account from './accountCreator';

export default {
  ...app,
  ...github,
  ...user,
  ...account,
};
