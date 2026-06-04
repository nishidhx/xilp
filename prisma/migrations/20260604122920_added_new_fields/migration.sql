/*
  Warnings:

  - Added the required column `joining_date` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `working` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "joining_date" TEXT NOT NULL,
ADD COLUMN     "place" TEXT NOT NULL,
ADD COLUMN     "working" BOOLEAN NOT NULL;
