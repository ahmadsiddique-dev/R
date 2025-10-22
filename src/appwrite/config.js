import { configureStore } from "@reduxjs/toolkit";
import { Client, Flag, ID, Query, TablesDB } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
        this.databases = new TablesDB(this.client) 
        this.bucket = new Storage(this.client)
    }

    async createPost ({title, slug, content, featuredImage, status, userID}) {
        try {
            return await this.databases.createRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_TABLE_ID,
                ID.unique(),
                slug,
                {
                    title,
                    content, 
                    featuredImage,status,
                    userID
                }

            )
        } catch (error) {
            console.log("Creating post error ::", error)
        }

    }

    async updatePost (slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_TABLE_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: UpdatePost :: error", error);
        }

    }

     async deletePost(slug) {
        try {
            await this.databases.deleteRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_TABLE_ID,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: DeletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_TABLE_ID,
                slug,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
        }
    }

    async getPosts (queries = Query.equal("status", "active")) {
        try {
            return await this.databases.listRows(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_TABLE_ID,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
        }
    }

    async uploadFile (file) {
        try {
            return this.bucket.createFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile (fileID) {
        try {
            await this.bucket.deleteFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                fileID,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;