-- CreateTable
CREATE TABLE "_UserParents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserParents_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserParents_B_index" ON "_UserParents"("B");

-- AddForeignKey
ALTER TABLE "_UserParents" ADD CONSTRAINT "_UserParents_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserParents" ADD CONSTRAINT "_UserParents_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
