import { Client, auth } from 'cassandra-driver';
import dotenv from 'dotenv';

dotenv.config();

// Configuration for Cassandra connection
const cassandraConfig = {
  contactPoints: process.env.CASSANDRA_CONTACT_POINTS?.split(',') || ['127.0.0.1'],
  localDataCenter: process.env.CASSANDRA_LOCAL_DATACENTER || 'datacenter1',
  keyspace: process.env.CASSANDRA_KEYSPACE || 'chat_messages',
  credentials: {
    username: process.env.CASSANDRA_USERNAME || "",
    password: process.env.CASSANDRA_PASSWORD || ""
  },
  protocolOptions: {
    port: parseInt(process.env.CASSANDRA_PORT || '9042', 10),
  },
  pooling: {
    coreConnectionsPerHost: {
      [0]: 2,
      [1]: 1
    }
  },
  socketOptions: {
    connectTimeout: 30000,
    readTimeout: 30000
  }
};

// Singleton Cassandra client
class CassandraConnection {
  private static instance: Client | null = null;
  private static isConnected: boolean = false;

  static async getInstance(): Promise<Client> {
    if (!this.instance) {
      this.instance = new Client(cassandraConfig);

      try {
        await this.instance.connect();
        this.isConnected = true;
        console.log('Connected to Cassandra cluster');

        // Create keyspace if it doesn't exist
        await this.createKeyspaceIfNotExists();

        // Set the keyspace for the session
        await this.instance.execute(`USE ${cassandraConfig.keyspace}`);

      } catch (error) {
        console.error('Failed to connect to Cassandra:', error);
        throw error;
      }
    }

    return this.instance;
  }

  static async createKeyspaceIfNotExists(): Promise<void> {
    if (!this.instance) return;

    const createKeyspaceCQL = `
      CREATE KEYSPACE IF NOT EXISTS ${cassandraConfig.keyspace}
      WITH REPLICATION = {
        'class': 'SimpleStrategy',
        'replication_factor': ${process.env.CASSANDRA_REPLICATION_FACTOR || '1'}
      }
    `;

    try {
      await this.instance.execute(createKeyspaceCQL);
      console.log(`Keyspace ${cassandraConfig.keyspace} created or already exists`);
    } catch (error) {
      console.error('Failed to create keyspace:', error);
      throw error;
    }
  }

  static async runMigrations(migrationQueries: string[]): Promise<void> {
    const client = await this.getInstance();

    for (const query of migrationQueries) {
      try {
        await client.execute(query);
        console.log('Migration executed successfully');
      } catch (error) {
        console.error('Migration failed:', error);
        console.error('Query:', query);
        // Continue with other migrations even if one fails
      }
    }
  }

  static async shutdown(): Promise<void> {
    if (this.instance && this.isConnected) {
      await this.instance.shutdown();
      this.isConnected = false;
      console.log('Cassandra connection closed');
    }
  }

  static isConnectionActive(): boolean {
    return this.isConnected;
  }
}

export default CassandraConnection;
export { cassandraConfig };