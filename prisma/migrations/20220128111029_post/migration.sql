-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "likes" INTEGER NOT NULL,
    "posted" BOOLEAN NOT NULL,
    "picture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
