import { MongoClient, ServerApiVersion, Db, Collection } from "mongodb";
import { ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI!;
console.log(uri)
const client = new MongoClient(uri,{
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

interface Contacto {
  _id?: ObjectId;
  nombre: string;
  correo: string;
  mensaje: string;
  fecha?: Date;
}

export class PortfolioDB {
  private static instance: PortfolioDB | null = null;
  private db: Db | null = null;
  private contactos!: Collection<Contacto>;

  private constructor() {}

  public static async getInstance(): Promise<PortfolioDB> {
    if (!PortfolioDB.instance) {
      const db = new PortfolioDB();
      await db.connect();
      PortfolioDB.instance = db;
    }
    return PortfolioDB.instance;
  }

  private async connect(): Promise<void> {
    if (!this.db) {
      await client.connect();
      this.db = client.db("portfolio");
      this.contactos = this.db.collection<Contacto>("contactos");
      console.log("✅ Conectado a MongoDB para portafolio");
    }
  }

  public async guardarContacto(contacto: Contacto): Promise<boolean> {
    try {
      contacto.fecha = new Date();
      await this.contactos.insertOne(contacto);
      return true;
    } catch (error) {
      console.error("❌ Error al guardar contacto:", error);
      return false;
    }
  }
}