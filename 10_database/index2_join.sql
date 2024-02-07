CREATE TABLE customer(
    id VARCHAR(10) PRIMARY key,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
DESC customer;
INSERT INTO customer VALUES('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
SELECT * FROM customer;

CREATE Table orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);
--ON UPDATE CASCADE: 기준 테이블(customer)의 데이터가 변경되면 참조 테이블(orderlist)의 데이터도 변경된다.
--ON DELETE CASCADE: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제된다.

-- FOREIGN KEY (현재 테이블 컬럼이름) REFERENCES 기준 테이블(기준 테이블 컬럼이름PK)
-- 테이블을 생성할 때: 외래키는 기준 테이블이 있어야 설정이 가능하다.
-- 테이블을 삭제할 때: fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(orderlist)을 먼저 삭제해야한다.

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);
 SELECT * FROM orderlist;
 --join
 --1. inner join, INNER JOIN과 ON 사용
 SELECT * FROM customer INNER JOIN orderlist ON customer.id = orderlist.customer_id;
 --2. ,와 WHERE로 INNER JOIN 사용
 SELECT orderlist.id, customer.id, customer.name, orderlist.product_name
  FROM customer, orderlist 
  WHERE customer.id = orderlist.customer;
--3. INNER JOIN, ON 사용, WHERE 조건과 함께 사용
SELECT orderlist INNER JOIN customer
 ON customer.id = orderlist.customer_id
 WHERE orderlist.quantity >=5;
 --4. table 별칭지어서 접근(as 이용)
 SELECT o.id as order_id, c.id as customer_id, c.name, o.product_name
  FROM customer as c, orderlist as o
  WHERE c.id = o.customer_id;

--natural JOIN
SELECT * FROM orderlist NATURAL join customer;

 -- outer join
 SELECT * FROM customer LEFT OUTER JOIN orderlist
  ON customer.id=orderlist.customer_id;
SELECT * FROM orderlist RIGHT OUTER JOIN customer
  ON customer.id=orderlist.customer_id;