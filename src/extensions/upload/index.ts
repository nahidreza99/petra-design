import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

module.exports = {
  async upload(file) {
    const command = new PutObjectCommand({
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