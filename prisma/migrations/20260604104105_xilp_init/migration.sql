-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "skills" TEXT[],
    "description" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Experience_id_key" ON "Experience"("id");
