-- AlterTable
ALTER TABLE `post` ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `profile` ALTER COLUMN `age` DROP DEFAULT;
