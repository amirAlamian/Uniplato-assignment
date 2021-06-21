import { Prisma, PrismaClient } from '@prisma/client';

export class CategoryRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient();
  }
}
