CREATE TABLE users (
  user_id INT PRIMARY KEY,
  email varchar(50)  NOT NULL,
  first_name varchar(50),
  last_name varchar(50),
  dob varchar(50),
  user_password varchar(50),
  cell_no varchar(50),
  address varchar(50)
);

CREATE TABLE products(
    product_id INT PRIMARY KEY,
    name varchar(50),
    price varchar(50),
    description varchar(255),
    type varchar(40),
    category varchar(40),
    availablity BOOL
);

CREATE TABLE size(
    product_id INT,
    XS INT,
    S INT,
    M INT,
    L INT,
    XL INT,
    FOREIGN KEY(product_id) references products(product_id)
);

CREATE TABLE favourite(
    fav_id INT PRIMARY KEY,
    user_id INT,
    product_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE orders(
    order_id INT PRIMARY KEY,
    user_id INT,
    order_date varchar(50),
    order_status BOOL,
    total double
);
CREATE TABLE ordered_items(
    id int PRIMARY KEY,
    order_id INT,
    product_id INT,
    size INT,
    quantity INT,
    price DOUBLE,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
    
);
CREATE TABLE items_in_cart(
    car_id INT PRIMARY KEY,
    user_id INT,
    product_id INT,
    size INT,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);


-- inserting some values into users table
INSERT INTO users (user_id,email,first_name,last_name,dob,user_password,cell_no,address)
VALUES (1,'fahadanwar363@gmail.com','fahad','anwar','22-11-2000','balethebatman','03349927655','274-b pcsir phase 1'),
(2,'waleedsajjad20@gmail.com','waleed','sajjad','02-11-2000','waliRx@rocketleague','03215924590','dha phase 8'),
(3,'ahmadarif@yahoo.com','ahmad','arif','23-06-1998','leomessi10','02210348975','34-D model town');
-- fetching some values from users table
SELECT * FROM users;
SELECT email and user_password FROM users;  

-- insert some values into products table
INSERT INTO products(product_id,name,price,description,type,category,availablity )
VALUES(1,'Beige cargo pants','3,900 RS','very soft and flexible pants','pants','U',1),
(2,'blue Polo T shirt','2,500 RS','giordano premium cotton polo shirt','shirt','M',1),
(3,'nike shorts','1,500 RS','sports shorts nike','Shorts','U',0);
-- fetching some values from products table using where clause
SELECT * FROM products;
SELECT * FROM products where category='U';