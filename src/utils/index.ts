export function assetPath(fileName: string): string {
	return process.env.PUBLIC_URL + fileName;
}
