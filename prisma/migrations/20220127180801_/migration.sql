-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userTagId_fkey";

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "userTagId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userTagId_fkey" FOREIGN KEY ("userTagId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
