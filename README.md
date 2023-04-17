[![CodeFactor](https://www.codefactor.io/repository/github/aripadrian/tokovoucher/badge)](https://www.codefactor.io/repository/github/yolkmonday/tokovoucher)
[![Npm package monthly downloads](https://badgen.net/npm/dm/tokovoucher)](https://npmjs.com/package/tokovoucher)

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

### Cek Produk 
```js
let cekStatus = await client.getProduk(kodeProduk);
```

> Note:
> Kode Produk adalah kode produk yang ingin di cek


### Cek Status Transaksi
```js
let cekStatus = await client.cekStatusTransaksi(refId);
```

> Note:
> RefID adalah kode transaksi unik kamu yang di generate secara acak


### List Kategori
```js
let kategori = await client.listKategori();
```

### List Operator
```js
let operator = await client.listOperatorByKategori(id_kategori);
```

### List Jenis
```js
let jenis = await client.listJenisByOperator(id_operator);
```

### List Produk
```js
let produk = await client.listProduk(id_operator, id_jenis);
```

### License

[MIT](https://github.com/aripadrian/tokovoucher/blob/master/LICENSE)

### Author

[Ari Padrian](mailto:aripadrian@gmail.com)



