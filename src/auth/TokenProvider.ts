export interface TokenProvider {
    getAccessToken(characterId: string | number): Promise<string>;
}
