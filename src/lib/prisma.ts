if (typeof process !== 'undefined') {
  process.env.PRISMA_CLIENT_ENGINE_TYPE = 'library';
}
import { PrismaClient } from '@prisma/client'


const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
