const { Level } = require('level');
const chainDB = './chaindata';

class LevelDB {
  constructor() {
    this.db = new Level(chainDB);
  }

  // Adicionar dados ao LevelDB com chave e valor (async/await)
  async addLevelDBData(key, value) {
    try {
      await this.db.put(key, value);
      return value;
    } catch (err) {
      console.error('Block ' + key + ' submission failed', err);
      throw err;
    }
  }

  // Alterar dados no LevelDB (async/await)
  async changeDBData(key, value) {
    try {
      await this.db.put(key, value);
      return "Block Change Successful";
    } catch (err) {
      if (err.notFound) {
        return "Block Not Found";
      } else {
        console.error('Error changing block ' + key, err);
        throw err;
      }
    }
  }

  // Obter dados do LevelDB com chave (async/await)
  async getLevelDBData(key) {
    try {
      const value = await this.db.get(key);
      return value;
    } catch (err) {
      if (err.notFound) {
        return undefined;
      } else {
        console.error('Block ' + key + ' get failed', err);
        throw err;
      }
    }
  }

  // Adicionar dados ao LevelDB com valor e índice incremental
  async addDataToLevelDB(value) {
    try {
      const count = await this.getBlocksCount();
      await this.addLevelDBData(count, value);
      return true;
    } catch (err) {
      console.error('Error adding data to LevelDB', err);
      throw err;
    }
  }

  // Contar o número de blocos no banco de dados
  async getBlocksCount() {
    let count = 0;
    for await (const _ of this.db.keys()) {  // Usando o iterator de chaves
      count++;
    }
    return count;
  }

  // Permitir que o cliente veja a blockchain
  async getChain() {
    const chain = [];
    for await (const [key, value] of this.db.iterator()) {  // Usando o iterator para percorrer chave/valor
      chain.push({ key, value });
    }
    return chain;
  }
}

module.exports.LevelDB = LevelDB;






















