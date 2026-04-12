import { RequestOptions } from "./EsiClient";

export interface EsiRequester {
    request<T>(options: RequestOptions, userId?: number): Promise<T>;
}
