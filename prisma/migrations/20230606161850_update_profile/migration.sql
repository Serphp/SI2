/*
  Warnings:

  - Made the column `bio` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `portada` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `profiles` MODIFY `bio` VARCHAR(191) NOT NULL DEFAULT 'I''m a new user',
    MODIFY `portada` VARCHAR(191) NOT NULL DEFAULT 'https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png',
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `age` INTEGER NOT NULL DEFAULT 18,
    MODIFY `avatar` VARCHAR(191) NOT NULL DEFAULT 'https://cataas.com/cat/GPz9v7NpZ8F7xLFi/says/hello%20world',
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `lastname` VARCHAR(191) NOT NULL,
    MODIFY `location` VARCHAR(191) NOT NULL DEFAULT 'Earth';
