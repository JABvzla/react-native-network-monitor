const getRandomId = () => Math.random() * 1000000;

class ItemStorage {
  static _instance;

  items = [];
  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new ItemStorage();
    return this._instance;
  }
  addItem(item) {
    const newItem = {
      id: getRandomId(),
      ...item,
    };
    this.items = [newItem, ...this.items];
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items.length = 0;
  }
}

export default ItemStorage.getInstance();
