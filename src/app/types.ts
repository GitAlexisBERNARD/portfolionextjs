export interface MonComposantProps {
    message: string;
}
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: any;
}