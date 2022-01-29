/*
  Warnings:

  - Added the required column `userTagId` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "userTagId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userTagId_fkey" FOREIGN KEY ("userTagId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
