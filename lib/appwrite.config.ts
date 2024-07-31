import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a6d169002c08a8f97c")
  .setKey(
    "a96902db22f5e61bda64b800f3678e9441bb51f56503d2f22c89cee2ae7f682d5f88ad8dabc205bab871477ac59119291ad7cd489734d753710f53a75069a3a28dd6a14c7d91ce27a7e06309f1d00515041bc0ce76f055a07172be2e15a402edb5be83acaa48571efdf5b4e91af336a33e6a861677d5f8fc1fa605cbec1641eb"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
