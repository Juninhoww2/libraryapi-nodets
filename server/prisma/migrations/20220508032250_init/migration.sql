-- CreateTable
CREATE TABLE "obras" (
    "id" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autores" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "obras_pkey" PRIMARY KEY ("id")
);
