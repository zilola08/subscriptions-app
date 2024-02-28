/*
  Warnings:

  - You are about to drop the column `item` on the `Data` table. All the data in the column will be lost.
  - Added the required column `items` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Data" DROP COLUMN "item",
ADD COLUMN     "items" INTEGER NOT NULL;
