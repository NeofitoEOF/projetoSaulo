/*
  Warnings:

  - You are about to drop the column `taskId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskId",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
