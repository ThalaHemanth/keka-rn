import RootStore from './RootStore';
import { observable, runInAction } from 'mobx';

class UserStore {
  private rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  private isLogged: boolean = false;

  public isUserLogged = () => {
    return this.isLogged;
  };

  public signInUser = () => {
    runInAction(() => {
      this.isLogged = true;
    });
  };

  public signOut = () => {
    runInAction(() => {
      this.isLogged = false;
    });
  };
}

export default UserStore;
