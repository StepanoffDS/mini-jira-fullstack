import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class AccountService {
  public constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    const users = await this.prisma.user.findMany();

    if (!users) {
      throw new NotFoundException('Accounts not found');
    }

    return users;
  }
}
