import UserStore from './UserStore';
import CartStore from './CartStore';
import NavigationStore from './NavigationStore';

class RootStore {
  userStore: UserStore;
  cartStore: CartStore;
  navigationStore: NavigationStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.cartStore = new CartStore(this);
    this.navigationStore = new NavigationStore(this);
  }
}

export const rootStore = new RootStore();

export default RootStore;
