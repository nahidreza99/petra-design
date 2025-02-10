"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
const s3Client = new client_s3_1.S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});
module.exports = {
    async upload(file) {
        const command = new client_s3_1.PutObjectCommand({
            Bucket: process.env.AWS_BUCKET,
            Key: `uploads/${file.name}`,
            Body: file.buffer,
            ContentType: file.type,
            ACL: 'public-read'
        });
        await s3Client.send(command);
        return {
            url: `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${file.name}`
        };
    }
};
