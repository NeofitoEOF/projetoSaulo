-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_name_fkey" FOREIGN KEY ("name") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;