/*
  Warnings:

  - You are about to drop the column `Age` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `Age`,
    DROP COLUMN `Date`,
    DROP COLUMN `LastName`,
    ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `avatar` VARCHAR(191) NULL,
    ADD COLUMN `date` DATETIME(3) NULL,
    ADD COLUMN `lastname` VARCHAR(191) NULL,
    ADD COLUMN `location` VARCHAR(191) NULL;
