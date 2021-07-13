import RootStore from './RootStore';
import { observable } from 'mobx';

class NavigationStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  private currentRoute: string = '';

  public getCurrentRoute = () => {
    return this.currentRoute;
  };

  public setCurrentRoute = (routeName: string) => {
    this.currentRoute = routeName;
  };
}

export default NavigationStore;
