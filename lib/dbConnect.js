import { MongoClient } from "mongodb";

export default class MongoDBService {
  async establishConnection() {
    try {
      const connectionURL = process.env.MONGODB_URI;
      const client = await MongoClient.connect(connectionURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      return client;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async performQuery(queryFn, tableName) {
    const client = await this.establishConnection();
    if (!client) return false;

    try {
      const databaseName = "Portfolio";
      const db = client.db(databaseName);
      const collection = db.collection(tableName);
      const result = await queryFn(collection);
      return result;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      client.close();
    }
  }

  async findData(query, tableName) {
    return this.performQuery(async (collection) => {
      return await collection.findOne(query);
    }, tableName);
  }

  async findAllData(query, tableName) {
    return this.performQuery(async (collection) => {
      return await collection.find(query).toArray();
    }, tableName);
  }

  async insertData(obj, tableName) {
    return this.performQuery(async (collection) => {
      return await collection.insertOne(obj);
    }, tableName);
  }

  async updateData(query, newObject, tableName) {
    return this.performQuery(async (collection) => {
      const newValues = { $set: newObject };
      return await collection.updateOne(query, newValues);
    }, tableName);
  }

  async deleteData(query, tableName) {
    return this.performQuery(async (collection) => {
      return await collection.deleteOne(query);
    }, tableName);
  }
}
