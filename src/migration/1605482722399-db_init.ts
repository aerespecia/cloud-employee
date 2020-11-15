import {MigrationInterface, QueryRunner} from "typeorm";

export class dbInit1605482722399 implements MigrationInterface {
    name = 'dbInit1605482722399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "firstName" character varying(300) NOT NULL, "lastName" character varying(300) NOT NULL, "email" character varying(300) NOT NULL, "state" character varying(300) NOT NULL, "petExperience" character varying(300) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
