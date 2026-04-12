<div align="center">
    <h1><code>@strata-eve/esi</code></h1>
    <img src="https://img.shields.io/github/actions/workflow/status/strata-eve/esi/ci.yml?style=flat-square"/>
    <img src="https://img.shields.io/github/license/strata-eve/esi?style=flat-square"/>
    <img src="https://img.shields.io/github/package-json/v/strata-eve/esi?style=flat-square"/>
    <img src="https://img.shields.io/badge/sponsor-send%201B%20ISK%20I'll%20send%202B-blueviolet?style=flat-square">
</div>
<hr/>

A TypeScript client for the [EVE Online ESI](https://developers.eveonline.com/docs/services/esi/overview).
The endpoint methods and TypeScript interfaces are automatically generated from the official ESI OpenAPI
specification. It also includes an internal queue manager to handle rate limits and HTTP 429 responses
automatically.

> [!CAUTION]  
> This project is in early development. It is not ready for production.
> Breaking changes will happen.

> [!WARNING]
> Use this library at your own risk. The authors are not responsible for any damage, loss of ISK, API bans, or other problems caused by using this code. Do not use this on your main EVE Online characters or in live applications without testing.

## Installation

Install the package via npm or your preferred package manager:

```bash
npm i @strata-eve/esi
yarn add @strata-eve/esi
```

## Usage

```ts
import { EsiClient } from "@strata-eve/esi";

const esi = new EsiClient({
    agent: {
        appName: "MyApp/1.0",
        contact: "yourmail@example.com",
    },
    tokenProvider: myTokenProvider,
});

async function run() {
    try {
        const target = esi.character(99000001);
        const publicInfo = await target.fetch();

        console.log(`Character name: ${publicInfo.name}`);

        const me = esi.as(2124271008);

        const wallet = await me.character.wallet.balance();
        console.log(`Balance: ${wallet} ISK`);

        const corp = await me.character.corporation.fetch();
        console.log(`My corporation: ${corpInfo.name}`);
    } catch (error) {
        if (error instanceof EsiApiError) {
            console.error(`Error (${error.status}):`, error.data);
        } else if (error instanceof EsiAuthError) {
            console.error("Authorization error");
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

run();
```

### Code Generation

Do not modify the `src/api/GeneratedApi.ts` file manually.

# License

MIT
