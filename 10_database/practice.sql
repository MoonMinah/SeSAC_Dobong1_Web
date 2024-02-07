-- ---------database 관련 명령어
-- DB 목록 확인
SHOW DATABASES;

-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydatabase;

-- CREATE : DATABASE 생성
create database sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/* 
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4 는 utf8보다 더많은 문자 지원(이모지 저장 가능)
>>이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
 */
create database dobong character set utf8mb4 COLLATE utf8mb4_unicode_ci;

USE practice;

CREATE TABLE customer(
    custid VARCHAR(10) PRIMARY key,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
DESC customer;
INSERT INTO customer VALUES('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (custid, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (custid, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (custid, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
SELECT * FROM customer;

CREATE Table orders(
    orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    custid VARCHAR(10) NOT NULL,
    prodname VARCHAR(20) NOT NULL,
    FOREIGN KEY (custid) REFERENCES customer(custid) ON UPDATE CASCADE ON DELETE CASCADE
);
DESC order;

INSERT INTO orders (custid, prodname) VALUES ('aaa', '맥북m1');
INSERT INTO orders (custid, prodname) VALUES ('bbb', '빅파이');
INSERT INTO orders (custid, prodname) VALUES ('ccc', '키보드');
INSERT INTO orders (custid, prodname) VALUES ('bbb', '초코파이');
INSERT INTO orders (custid, prodname) VALUES ('ccc', '귀여운텀블러');
 SELECT * FROM orders;


 CREATE Table A(
    id int NOT null PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age int NOT NULL
 );
 INSERT INTO A VALUES(20115544, 'a', 34);
 INSERT INTO A VALUES(20156677, 'b', 31);
 INSERT INTO A VALUES(20227755, 'c', 25);
 INSERT INTO A VALUES(20232223, 'd', 23);
 INSERT INTO A VALUES(20201144, 'e', 23);
 INSERT INTO A VALUES(20145145, 'f', 30);
 INSERT INTO A VALUES(20180919, 'g', 26);
 SELECT * FROM A ORDER BY name;


  CREATE Table B(
    id int NOT null PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age int NOT NULL
 );
 INSERT INTO B VALUES(2022091994, 'h', 29);
 INSERT INTO B VALUES(2020101021, 'i', 23);
 INSERT INTO B VALUES(2018187566, 'j', 26);

CREATE Table application(
    application_id int AUTO_INCREMENT PRIMARY KEY,
    id int NOT null,
    subject VARCHAR(10) not null
);
DESC application;
INSERT INTO application (id, subject) VALUES ('20115544', '네트워크');
INSERT INTO application (id, subject) VALUES ('20115544', '알고리즘');
INSERT INTO application (id, subject) VALUES ('20156677', '알고리즘');
INSERT INTO application (id, subject) VALUES ('20227755', '네트워크');
INSERT INTO application (id, subject) VALUES ('20232223', 'C언어');
INSERT INTO application (id, subject) VALUES ('20145145', '캡스톤');
INSERT INTO application (id, subject) VALUES ('20180919', '캡스톤');
INSERT INTO application (id, subject) VALUES ('20180919', 'C언어');
INSERT INTO application (id, subject) VALUES ('20180919', '네트워크');
INSERT INTO application (id, subject) VALUES ('2022091994', 'C언어');
INSERT INTO application (id, subject) VALUES ('2022091994', '캡스톤');
INSERT INTO application (id, subject) VALUES ('2022091994', '웹프레임워크');
INSERT INTO application (id, subject) VALUES ('2018187566', 'C언어');
INSERT INTO application (id, subject) VALUES ('2018187566', '네트워크');
INSERT INTO application (id, subject) VALUES ('2018187566', '캡스톤');
SELECT * FROM application;

SELECT A.id, A.name, A.age, application.application_id, application.id, application.subject FROM A join application ON A.id = application.id;
--natural JOIN
SELECT * FROM A NATURAL JOIN application;
-- outer join
SELECT 
    A.id, A.name, A.age,
    application.application_id AS '신청id',
    application.id AS '신청자id',
    application.subject
FROM A 
LEFT JOIN application ON A.id = application.id
ORDER BY A.id;
SELECT * FROM A RIGHT OUTER JOIN application
 ON A.id=application.id;