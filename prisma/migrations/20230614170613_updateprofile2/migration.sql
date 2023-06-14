/*
  Warnings:

  - You are about to drop the column `avatar` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `portada` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `avatar`,
    DROP COLUMN `date`,
    DROP COLUMN `portada`,
    ALTER COLUMN `location` DROP DEFAULT,
    ALTER COLUMN `bio` DROP DEFAULT;
