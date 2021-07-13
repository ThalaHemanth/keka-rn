import RootStore from './RootStore';
import { action, observable, runInAction } from 'mobx';

class CartStore {
  private rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  private cartItems: any = [];

  @observable
  private cartModalOpen = false;

  public CartNotEmpty = () => {
    return this.cartItems.length > 0;
  };

  @action
  public addToCart = (item) => {
    console.log('Adding To Cart Sir');
    console.log(this.cartItems);
    runInAction(() => {
      console.log('Came into here sir');
      this.cartItems.push(item);
    });
  };

  @action
  public setCartActive = (val: boolean) => {
    runInAction(() => {
      this.cartModalOpen = val;
    });
  };

  public getRoute = () => {
    this.rootStore.userStore.getCurrentRoute();
  };

  public isCartFocused = () => {
    return this.cartModalOpen;
  };

  public cartLength = () => {
    return this.cartItems.length;
  };

  public clearCart = () => {
    this.cartItems = [];
  };
}

export default CartStore;
