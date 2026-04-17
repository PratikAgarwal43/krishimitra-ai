import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

const connectionString = `${process.env.DATABASE_URL}`

const prismaClientFactory = () => {
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? prismaClientFactory()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
