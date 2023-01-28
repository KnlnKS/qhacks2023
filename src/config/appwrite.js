import { Client, Account } from "appwrite";

const appwriteClient = new Client();

appwriteClient.setEndpoint("https://cloud.appwrite.io/v1");
appwriteClient.setProject(import.meta.env.VITE_PROJECT_ID);

const account = new Account(appwriteClient);

export { appwriteClient, account };
