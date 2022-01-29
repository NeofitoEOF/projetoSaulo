/*
  Warnings:

  - Added the required column `taskId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_name_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "taskId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
