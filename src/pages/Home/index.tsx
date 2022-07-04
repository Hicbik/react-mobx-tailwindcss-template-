import { Button } from '@douyinfe/semi-ui';
import { observer } from 'mobx-react-lite';
import React from 'react';

import userStore from '@/store/userStore';

const Index = observer(() => {
  const { userInfo } = userStore;

  return (
    <div>
      {userInfo && JSON.stringify(userInfo)}
      <Button onClick={() => userStore.login()}>登录</Button>
    </div>
  );
});

export default Index;
