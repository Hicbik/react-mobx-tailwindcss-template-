import { makeAutoObservable } from 'mobx';

import api from '@/request/api';
import { post } from '@/request/intex';

interface IUserInfo {
  token: string;
  avatar: string;
  userName: string;
}

class userStore {
  userInfo: IUserInfo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async login() {
    const res = await post(api.login);
    if (res) this.userInfo = res.data;
  }
}

export default new userStore();
