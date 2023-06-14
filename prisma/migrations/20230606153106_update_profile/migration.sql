-- AlterTable
ALTER TABLE `profiles` MODIFY `bio` VARCHAR(191) NULL DEFAULT 'I''m a new user',
    MODIFY `portada` VARCHAR(191) NULL DEFAULT 'https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png',
    MODIFY `age` INTEGER NULL DEFAULT 18,
    MODIFY `avatar` VARCHAR(191) NULL DEFAULT 'https://cataas.com/cat/GPz9v7NpZ8F7xLFi/says/hello%20world',
    MODIFY `date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `location` VARCHAR(191) NULL DEFAULT 'Earth';
