-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "TaskXTags" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "tagsId" TEXT NOT NULL,

    CONSTRAINT "TaskXTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TaskXTags" ADD CONSTRAINT "TaskXTags_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskXTags" ADD CONSTRAINT "TaskXTags_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;