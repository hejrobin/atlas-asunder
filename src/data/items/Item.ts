interface ItemType {
	guid: string;
	name: string;
	description: string;
	maxUses: number;
	onUse?: () => void;
	onDiscard?: () => void;
}

export default class Item {
	protected numUses = 0;

	constructor(protected data: ItemType) {}

	get guid(): string {
		return this.data.guid;
	}

	get name(): string {
		return this.data.name;
	}

	get description(): string {
		return this.data.description;
	}

	get maxUses(): number {
		return this.data.maxUses;
	}

	use(): void {
		if (this.data.onUse instanceof Function) {
			this.data.onUse();
		}

		if (this.numUses < this.maxUses) {
			this.numUses = this.numUses + 1;
		} else if (this.numUses + 1 >= this.maxUses) {
			if (this.data.onDiscard instanceof Function) {
				this.data.onDiscard();
			}
		}
	}
}
