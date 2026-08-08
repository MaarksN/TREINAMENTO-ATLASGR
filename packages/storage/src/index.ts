import { Client } from 'minio';

export const courseStorage = new Client({
  endPoint: process.env.MINIO_ENDPOINT ?? '127.0.0.1',
  port: Number(process.env.MINIO_PORT ?? 9000),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY ?? 'treinamento',
  secretKey: process.env.MINIO_SECRET_KEY ?? 'change-this-minio-password',
});

export async function ensureCourseBuckets(): Promise<void> {
  for (const bucket of ['course-assets', 'course-certificates']) {
    if (!(await courseStorage.bucketExists(bucket))) await courseStorage.makeBucket(bucket);
  }
}
