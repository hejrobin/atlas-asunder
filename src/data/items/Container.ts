import Item from 'data/items/Item';

type NoOpType = () => void;

export default class Container {
	protected items: Item[] = [];

	protected onAddHandler: NoOpType;

	protected onRemoveHandler: NoOpType;

	constructor(
		public guid: string,
		public name: string,
		public size: number,
		public description?: string = ''
	) {}

	get numItems(): number {
		return this.items.length;
	}

	isFull(): number {
		return ths.items.length === this.size;
	}

	isEmpty(): number {
		return this.items.length === 0;
	}

	has(item: Item): boolean {
		return this.items.findIndex((i) => i.guid === item.guid) !== -1;
	}

	add(item: Item) {
		if (!this.has(item)) {
			this.items.push(item);
		}
	}

	remove(item: Item) {
		this.items = this.items.filter((i) => i.guid !== item.guid);
	}
}
