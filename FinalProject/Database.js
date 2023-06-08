import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('MyStoreDatabase');

/*
const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        first_name TEXT,
        last_name TEXT,
        dob TEXT,
        user_password TEXT,
        cell_no TEXT,
        address TEXT
      );`,
      [],
      () => {
        console.log('Users Table created successfully.');
      },
      (_, error) => {
        console.log('Error creating Users table:', error);
      }
    );
  });
//PRODUCTS TABLE-----------------------------------------------------------------------------------
db.transaction(tx => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS products (
      product_id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price TEXT,
      description TEXT,
      type TEXT,
      category TEXT,
      availability BOOL,
      XS INT,
      S INT,
      M INT,
      L INT,
      XL INT
    );`,
    [],
    () => {
      console.log('Products table created successfully.');
    },
    (_, error) => {
      console.log('Error creating table:', error);
    }
  );

  tx.executeSql(
    `INSERT INTO products (
      name, price, description, type, category, availability, XS, S, M, L, XL) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?),
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        'Polo T Shirt', '2999', 'Giordano Slim Fit Polo T Shirt. Made with finest cotton.', 'shirt', 'M', 1, 0, 0, 0, 4, 5,
        'Cargo Pants', '2000', 'Everyday wear zara premium trousers, comes with 4 pockets.', 'pants', 'U', 1, 5, 10, 15, 20, 25,
        'Nike Bag', '2900', 'Nike sports bag. Good for everyday use.', 'bag', 'U', 1, 5, 5, 5, 5, 5,
        'Adidas Striped Trousers', '3999', 'Extra Comfy and Flexible adidas trousers.', 'pants', 'M', 1, 7, 4, 0, 8, 5,
        'Graphic Tee', '1999', 'Goofy graphic tee shirt. Urban Vogue Special.', 'shirt', 'U', 1, 3, 5, 7, 2, 5,
        'Flow Graphic T Shirt', '1499', 'Casual wear "graphic T shirt". Comfortable, cool, and affordable.', 'shirt', 'M', 1, 8, 6, 0, 2, 4,
        'Flow Shorts','1499','Comfortable and Funky shorts.','shorts','M','1','3','4','0','5','6',
        'Zara Trousers','2499','Fashionable supreme quality Zara trousers.','pants','U','1','3','4','5','5','0',
        'Jack and Jones T-Shirt','2799','Casual wear jack and jones T shirt','shirt','M','1','3','4','0','1','0',
        'London T-Shirt','1999','Green Color london t-shirt, slim fit.','shirt','M','0','3','4','3','2','4',
        'Nike Shorts','3500','Extra Comfy and Flexible Nike shorts ','shorts','M','1','3','4','1','4','0',
        'Dockers Trousers','2550','Fashionable supreme quality Dockers trousers','pants','M','1','0','4','3','3','3'
      ],
    () => {
      console.log('Multiple products inserted successfully.');
    },
    (_, error) => {
      console.log('Error inserting multiple products:', error);
    }
  );
});


  //PRINTING PRODUCTS TABLE-------------------------------------------------------------------------
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM products;`,
      [],
      (_, result) => {
        console.log('Products:');
        const rows = result.rows;
        for (let i = 0; i < rows.length; i++) {
          const product = rows.item(i);
          console.log('Product ID:', product.product_id);
          console.log('Name:', product.name);
          console.log('Price:', product.price);
          console.log('Description:', product.description);
          console.log('Type:', product.type);
          console.log('Category:', product.category);
          console.log('Availability:', product.availability);
          console.log('XS:', product.XS);
          console.log('S:', product.S);
          console.log('M:', product.M);
          console.log('L:', product.L);
          console.log('XL:', product.XL);
          console.log('------------------------------');
        }
      },
      (_, error) => {
        console.log('Error fetching products:', error);
      }
    );
  });
  // IMAGES TABLE---------------------------------------------------------------------------------------------
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS images (
        image_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        image_path TEXT,
        FOREIGN KEY (product_id) REFERENCES products (product_id)
      );`,
      [],
      () => {
        console.log('Images Table created successfully.');
      },
      (_, error) => {
        console.log('Error creating Images table:', error);
      }
    );
  });
  //INSERTING IN IMAGES TABLE---------------------------------------------------------------------------------
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO images (product_id, image_path)
      VALUES (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?),
             (?, ?);`,
      [
        1, require('./assets/p1.PNG'),
        2, require('./assets/p2.PNG'),
        3, require('./assets/p3.PNG'),
        4, require('./assets/p4.PNG'),
        5, require('./assets/p5.PNG'),
        6, require('./assets/p6.PNG'),
        7, require('./assets/p7.PNG'),
        8, require('./assets/p8.PNG'),
        9, require('./assets/p9.PNG'),
        10, require('./assets/p10.PNG'),
        11, require('./assets/p11.PNG'),
        12, require('./assets/p12.PNG')
      ],
      () => {
        console.log('Dummy data inserted into the Images table successfully.');
      },
      (_, error) => {
        console.log('Error inserting dummy data into the Images table:', error);
      }
    );
  });
    db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS cart (
        cart_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        user_id INTEGER,
        size TEXT,
        quantity INTEGER,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
      );`,
      [],
      () => {
        console.log('Table  cart created successfully.');
      },
      (_, error) => {
        console.log('Error creating table cart :', error);
      }
    );
  });

  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS favorites (
        favorite_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        product_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (product_id) REFERENCES products (product_id)
      );`,
      [],
      () => {
        console.log('Table favorites created successfully.');
      },
      (_, error) => {
        console.log('Error creating table favorites:', error);
      }
    );
  });
}
initializeDatabase();
*/

export const insertUser = (user) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO users (email, first_name, last_name, dob, user_password, cell_no)
        VALUES (?, ?, ?, ?, ?, ?);`,
        [user.email, user.firstName, user.lastName, user.dob, user.password, user.phoneNumber],
        (_, result) => {
          console.log('User added successfully.');
          resolve(result.insertId);
        },
        (_, error) => {
          console.log('Error adding user:', error);
          reject(error);
        }
      ); 
    });
  });
};
export const checkEmailExists = (email) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT COUNT(*) as count FROM users WHERE email = ?;`,
        [email],
        (_, result) => {
          const count = result.rows.item(0).count;
          resolve(count > 0);
        },
        (_, error) => {
          console.log('Error checking email:', error);
          reject(error);
        }
      );
    });
  });
};

export const addToCart = (productId, userId, size, quantity) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO cart (product_id, user_id, size, quantity)
        VALUES (?, ?, ?, ?);`,
        [productId, userId, size, quantity],
        (_, result) => {
          console.log('Item has been added to cart successfully.');
          resolve(result.insertId);
        },
        (_, error) => {
          console.log('Error adding item to cart:', error);
          reject(error);
        }
      );
    });
  });
};

export const addToFavorites = (productId, userId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO favorites (user_id, product_id) VALUES (?, ?);`,
        [userId, productId],
        () => {
          
          console.log('Product added to favorites successfully db.',productId);
        },
        (_, error) => {
          console.log('Error adding product to favorites: db', error);
        }
      );
    });
  });
};

export const getCartItemsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT product_id, size, quantity FROM cart WHERE user_id = ?;`,
        [userId],
        (_, result) => {
          const cartItems = [];
          const rows = result.rows;
          for (let i = 0; i < rows.length; i++) {
            const item = rows.item(i);
            const { product_id, size, quantity } = item;
            cartItems.push({product_id, size, quantity });
            console.log('items being returned are ----:', cartItems);
            
          }
          resolve(cartItems);
        },
        (_, error) => {
          console.log('Error retrieving cart items:', error);
          reject(error);
        }
      );
    });
  });
};

export const getFavoriteProductIdsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT product_id FROM favorites WHERE user_id = ?',
        [userId],
        (_, result) => {
          const rows = result.rows;
          const productIds = [];
          for (let i = 0; i < rows.length; i++) {
            const productId = rows.item(i).product_id;
            productIds.push(productId);
          }
          resolve(productIds);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export default db;
