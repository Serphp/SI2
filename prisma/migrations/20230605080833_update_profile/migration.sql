-- AlterTable
ALTER TABLE `post` ADD COLUMN `editPost` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `profiles` ADD COLUMN `portada` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `Role` VARCHAR(191) NOT NULL DEFAULT 'user';
