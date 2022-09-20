[![CodeFactor](https://www.codefactor.io/repository/github/aripadrian/tokovoucher/badge)](https://www.codefactor.io/repository/github/aripadrian/tokovoucher)
[![Npm package monthly downloads](https://badgen.net/npm/dm/apigames)](https://npmjs.ccom/package/apigames)

# Tokovoucher Client for Node Js

This library is the abstraction of tokovoucher API for access from applications written with server-side Javascript.

[![NPM](https://nodei.co/npm/tokovoucher.png)](https://nodei.co/npm/tokovoucher/)


## Instalasi

```bash
npm install tokovoucher
```

atau

```bash
yarn add tokovoucher
```

## Pemakaian
Dapatkan Merchant ID dan Secret Key Anda di [Tokovoucher Dashboard](https://member.tokovoucher.id/pengaturan/secret-key).

```js
const tokovoucher = require('tokovoucher');
const client = new tokovoucher("YOUR MERCHANT ID","YOUR SECRET");
```

### Cek Saldo
```js
let saldo = await client.cekSaldo();
```

### Transaksi

```js
let trx = await client.transaksi(refId, kodeProduk, tujuan, serverId);
```

> Note:
> RefID adalah kode transaksi unik kamu yang di generate secara acak

### Cek Status Transaksi
```js
let cekStatus = await client.cekStatusTransaksi(refId);
```

> Note:
> RefID adalah kode transaksi unik kamu yang di generate secara acak


### License

[MIT](https://github.com/aripadrian/tokovoucher/blob/master/LICENSE)

### Author

[Ari Padrian](mailto:aripadrian@gmail.com)



