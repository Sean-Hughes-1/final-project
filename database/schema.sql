set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";
CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"userName" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"createdAt" timestamptz(6) NOT NULL,
	"companyName" TEXT,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."expenses" (
	"expenseId" serial NOT NULL,
	"date" DATE NOT NULL,
	"amount" integer,
	"description" TEXT NOT NULL,
	"categoryId" integer NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "expenses_pk" PRIMARY KEY ("expenseId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."revenues" (
	"revenueId" serial NOT NULL,
	"date" DATE NOT NULL,
	"amount" integer NOT NULL,
	"description" TEXT NOT NULL,
	"categoryId" integer NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "revenues_pk" PRIMARY KEY ("revenueId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."categories" (
	"categoryId" serial NOT NULL,
	"category" TEXT NOT NULL,
	"type" TEXT NOT NULL,
	"isActive" BOOLEAN NOT NULL DEFAULT 'true',
	CONSTRAINT "categories_pk" PRIMARY KEY ("categoryId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "expenses" ADD CONSTRAINT "expenses_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("categoryId");
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "revenues" ADD CONSTRAINT "revenues_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("categoryId");
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
