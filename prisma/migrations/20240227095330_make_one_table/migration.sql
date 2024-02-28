/*
  Warnings:

  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscribers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Units` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_regionId_fkey";

-- DropForeignKey
ALTER TABLE "Subscribers" DROP CONSTRAINT "Subscribers_regionId_fkey";

-- DropForeignKey
ALTER TABLE "Units" DROP CONSTRAINT "Units_regionId_fkey";

-- DropTable
DROP TABLE "Items";

-- DropTable
DROP TABLE "Region";

-- DropTable
DROP TABLE "Subscribers";

-- DropTable
DROP TABLE "Units";

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "region" TEXT NOT NULL,
    "item" INTEGER NOT NULL,
    "units" INTEGER NOT NULL,
    "subscribers" INTEGER NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
