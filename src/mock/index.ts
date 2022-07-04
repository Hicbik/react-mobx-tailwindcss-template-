import Mock from 'mockjs';

import loginAPI from './loginAPI';

Mock.mock(/\/login/, 'post', loginAPI.login);
