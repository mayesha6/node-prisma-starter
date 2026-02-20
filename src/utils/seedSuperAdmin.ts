import bcryptjs from "bcryptjs";
import { envVars } from "../config/env";
import { Role } from "../modules/user/user.interface";
import { prisma } from "../lib/prisma";

export const seedSuperAdmin = async () => {
  try {
    const isSuperAdminExist = await prisma.user.findUnique({
      where: { email: envVars.SUPER_ADMIN_EMAIL },
    });

    if (isSuperAdminExist) {
      console.log("Super Admin Already Exists!");
      return;
    }

    console.log("Trying to create Super Admin...");

    const hashedPassword = await bcryptjs.hash(
      envVars.SUPER_ADMIN_PASSWORD,
      Number(envVars.BCRYPT_SALT_ROUND)
    );

    const superadmin = await prisma.user.create({
      data: {
        name: "Super admin",
        role: Role.SUPER_ADMIN,
        email: envVars.SUPER_ADMIN_EMAIL,
        password: hashedPassword,
        isVerified: true,
        storageUsed: 0,
        storageLimit: 0,
        auths: {
          create: [
            {
              provider: "credentials",
              providerId: envVars.SUPER_ADMIN_EMAIL,
            },
          ],
        },
      },
      include: {
        auths: true,
      },
    });

    console.log("Super Admin Created Successfully! \n");
    console.log(superadmin);
  } catch (error) {
    console.log(error);
  }
};