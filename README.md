# WUI Template using react with Vite and Deno 

Deno is a "new" typescript dev system meant to alleviate all the boilerplate that is needed to run typescript. Essentially its just much cleaner.

Vite is used as the "compiler" or "dev server". 

This is a 'cleaner' version of the starter template.

## Quickstart:

Note: Do not forget to add the gitlab registry to your `npmrc` -> https://wui.pages.zweieuro.at/core/web-user-interface-docs/docs/wui/core_library/node_module#installation


- `deno install` to fetch all dependencies,
- `deno task dev` start hot-reloading dev server on port 3000
- `deno task build` will create a static build at `client/dist`


# Structure
`client` are the "actual" websites that are shown. The `server` is used for 'hosting' the **dev** servers. It also hosts a testing version of the server.

# TODO:
Fix test system, see not in TestSetup.ts
Add it to the documentation pages
setup coverage report (and maybe CI for gitlab)
