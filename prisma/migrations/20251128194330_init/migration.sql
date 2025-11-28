-- CreateTable
CREATE TABLE "BetaSignup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "university" TEXT,
    "graduationYear" TEXT,
    "targetRole" TEXT,
    "hoursPerWeek" TEXT,
    "hardestPart" TEXT,
    "source" TEXT
);

-- CreateTable
CREATE TABLE "ArticleSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "articleSlug" TEXT NOT NULL,
    "totalXP" INTEGER NOT NULL,
    "questionsAnswered" INTEGER NOT NULL,
    "questionsCorrect" INTEGER NOT NULL,
    "meta" TEXT
);
