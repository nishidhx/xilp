-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('HYBRID', 'ONSITE', 'REMOTE');

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "work" "WorkType" NOT NULL DEFAULT 'ONSITE';
