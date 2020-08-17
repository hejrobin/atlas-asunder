export function assetPath(fileName: string): string {
	return process.env.PUBLIC_URL + fileName;
}

export const delay = (fraction: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, fraction));
