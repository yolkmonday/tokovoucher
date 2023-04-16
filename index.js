const crypto = require("crypto")
const rp = require("request-promise-native");

class Tokovoucher {
  /**
   * @param {string} merchant - Member Code
   * @param {string} secret - Secret Key
   **/
  constructor(merchant, secret) {
    this._merchant = merchant;
    this._secret = secret;
    this._endpoint = "https://api.tokovoucher.id"
  }

  cekSaldo() {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}`)
      .digest('hex')

    const options = {
      method: "GET",
      uri: `${this._endpoint}/member?member_code=${this._merchant}&signature=${signature}`,
      json: true,
    };
    return rp(options)
      .then(function (resp) {
        if (resp.data) {
          if (typeof resp.data.saldo !== undefined) {
            return resp.data.saldo;
          } else {
            throw Error(resp.data.error_msg);
          }
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }



  /**
   * @param {string} refId - RefId Unik Anda
   * @param {string} kodeProduk - Kode Produk
   * @param {string} tujuan - Tujuan Pengisian
   * @param {string} serverId - Server ID
   * 
   **/
  transaksi(refId, kodeProduk, tujuan, serverId) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}:${refId}`)
      .digest('hex')
    const options = {
      method: "POST",
      uri: `${this._endpoint}/v1/transaksi`,
      body: {
        "ref_id": refId,
        "produk": kodeProduk,
        "tujuan": tujuan,
        "server_id": serverId || "",
        "member_code": this._merchant,
        "signature": signature
      },
      json: true,
    };
    return rp(options)
      .then(function (resp) {
        return resp
      })
      .catch(function (err) {
        throw Error(err);
      });
  }

  /**
   * @param {string} refId - RefId Unik Anda
   * 
   **/
  cekStatusTransaksi(refId) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}:${refId}`)
      .digest('hex')
    const options = {
      method: "POST",
      uri: `${this._endpoint}/v1/transaksi/status`,
      body: {
        "ref_id": refId,
        "member_code": this._merchant,
        "signature": signature
      },
      json: true,
    };
    return rp(options)
      .then(function (resp) {
        return resp
      })
      .catch(function (err) {
        throw Error(err);
      });
  }

  /**
   **/
  listKategori() {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}`)
      .digest('hex')
    const options = {
      method: "GET",
      uri: `${this._endpoint}/member/produk/category/list?member_code=${this._merchant}&signature=${signature}`,
    };
    return rp(options)
      .then(function (resp) {
        return resp
      })
      .catch(function (err) {
        throw Error(err);
      });
  }


  /**
   *  @param {string} categoryId - Kategori ID yang dipilih
   **/
  listOperatorByKategori(categoryId) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}`)
      .digest('hex')
    const options = {
      method: "GET",
      uri: `${this._endpoint}/member/produk/operator/list?member_code=${this._merchant}&signature=${signature}&id=${categoryId}`,
    };
    return rp(options)
      .then(function (resp) {
        return resp
      })
      .catch(function (err) {
        throw Error(err);
      });
  }

  /**
   *  @param {string} operatorId - Kategori ID yang dipilih
   **/
  listJenisByOperator(operatorId) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}`)
      .digest('hex')
    const options = {
      method: "GET",
      uri: `${this._endpoint}/member/produk/jenis/list?member_code=${this._merchant}&signature=${signature}&id=${operatorId}`,
    };
    return rp(options)
      .then(function (resp) {
        return resp
      })
      .catch(function (err) {
        throw Error(err);
      });
  }

  /**
   *  @param {string} operatorId - Kategori ID yang dipilih
   **/
  listProduk(operatorId, jenisId) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}`)
      .digest('hex')
    const options = {
      method: "GET",
      uri: `${this._endpoint}/member/produk/list?member_code=${this._merchant}&signature=${signature}&id_op=${operatorId}&id_jenis=${jenisId}`,
    };
    return rp(options)
      .then(function (resp) {
        return resp
      })
      .catch(function (err) {
        throw Error(err);
      });
  }

  /**
   *  @param {string} productCode - Kategori ID yang dipilih
   **/
  getProduk(productCode) {
    let signature = crypto
      .createHash('md5')
      .update(`${this._merchant}:${this._secret}`)
      .digest('hex')
    const options = {
      method: "GET",
      uri: `${this._endpoint}/produk/code?member_code=${this._merchant}&signature=${signature}&kode=${productCode}`,
    };
    return rp(options)
      .then(function (resp) {
        const dt = JSON.parse(resp)
        if (dt.status) {
          return dt.data[0]
        } else {
          return "not found"
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }



}

module.exports = Tokovoucher;
