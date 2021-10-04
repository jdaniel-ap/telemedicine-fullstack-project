-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'MEDIC') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_data` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `race` VARCHAR(191) NOT NULL,
    `height` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,

    UNIQUE INDEX `User_data_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Health_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userDataId` VARCHAR(191) NOT NULL,
    `comorbidity` VARCHAR(191) NOT NULL,
    `isAlergic` BOOLEAN NOT NULL,
    `useCigars` BOOLEAN NOT NULL,
    `useDrugs` BOOLEAN NOT NULL,
    `useMedication` BOOLEAN NOT NULL,
    `useAlcohol` BOOLEAN NOT NULL,
    `howManyCigars` VARCHAR(191) NOT NULL,
    `alergics` VARCHAR(191) NOT NULL,
    `howMuchAlcohol` VARCHAR(191) NOT NULL,
    `howManyDrugs` VARCHAR(191) NOT NULL,
    `whichMedications` VARCHAR(191) NOT NULL,
    `isPregnant` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Health_data_userDataId_key`(`userDataId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Consult` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `medicId` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `motive` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_data` ADD CONSTRAINT `User_data_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Health_data` ADD CONSTRAINT `Health_data_userDataId_fkey` FOREIGN KEY (`userDataId`) REFERENCES `User_data`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consult` ADD CONSTRAINT `Consult_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
