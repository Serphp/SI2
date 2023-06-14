/*
  Warnings:

  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `profiles` DROP FOREIGN KEY `profiles_userId_fkey`;

-- DropTable
DROP TABLE `profiles`;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `age` INTEGER NOT NULL DEFAULT 18,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `location` VARCHAR(191) NOT NULL DEFAULT 'Earth',
    `bio` VARCHAR(191) NOT NULL DEFAULT 'I''m a new user',
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'https://cataas.com/cat/GPz9v7NpZ8F7xLFi/says/hello%20world',
    `portada` VARCHAR(191) NOT NULL DEFAULT 'https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png',
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
