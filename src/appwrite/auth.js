import { Client, ID, Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
            .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            console.log("Some data : ", name, email, password);
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // return await this.login({email, password})
                console.log("create successfully");
            }
        } catch (error) {
            console.log("AppwriteService :: Creating new Account :: Error", error);
        }
    }

    async login({email, password}) {
        try {
            await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("AppwriteService :: login :: Error", error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AppwriteService :: logout :: Error", error);
        }
    }

    async getCurrentUser () {
        try {
            return this.account.get();
        } catch (error) {
            console.log("AppwriteService :: logout :: Error", error);
        }
        return null;
    }

}

const authService = new AuthService();

export default authService;