-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "releaseYear" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "authors" TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
