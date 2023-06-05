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
//PRODUCTS TABLE-----------------------------------------------------------------
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS products (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,                                                                  
        price TEXT,
        description TEXT,
        type TEXT,
        category TEXT,
        availability BOOL
      );`,
      [],
      () => {
        console.log('products yooooo Table created successfully.');
      },
      (_, error) => {
        console.log('Error creating table:', error);
      }
    //DATA INSERTION INTO PRODUCTS TABLE------------------------------------------
    );
    tx.executeSql(
      `INSERT INTO products (name, price, description, type, category, availability)
      VALUES (?, ?, ?, ?, ?, ?),
             (?, ?, ?, ?, ?, ?),
             (?, ?, ?, ?, ?, ?),
             (?, ?, ?, ?, ?, ?),
             (?, ?, ?, ?, ?, ?),
             (?, ?, ?, ?, ?, ?);`,
      [
        'Polo T Shirt', '2999', 'Giordano Slim Fit Polo T Shirt. Made with finest cotton.', 'shirt', 'M', 1,
        'Cargo Pants', '2000', 'Everyday wear zara premuim trousers, comes it 4 pockets.', 'pants', 'U', 1,
        'Nike Bag', '2900', 'Nike sports bag. Good for everyday use.', 'bag', 'U', 1,
        'Adidas Striped Trousers', '3999', 'Extra Comfy and Flexible adidas trousers.', 'pants', 'M', 1,
        'Graphic Tee', '1999', 'goofy graphic tee shirt. Urban Vogue Special', 'shirt', 'U', 1,
        'Flow Graphic T Shirt', '1499', 'Casual wear "graphic T shirt". Comfortable, cool and affordable.', 'shirt', 'M', 1
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
             (?, ?);`,
      [
        1, require('./assets/p1.PNG'),
        2, require('./assets/p2.PNG'),
        3, require('./assets/p3.PNG'),
        4, require('./assets/p4.PNG'),
        5, require('./assets/p5.PNG'),
        6, require('./assets/p6.PNG')
      ],
      () => {
        console.log('Dummy data inserted into the Images table successfully.');
      },
      (_, error) => {
        console.log('Error inserting dummy data into the Images table:', error);
      }
    );
  });

//SIZE TABLE-----------------------------------------------------------------------------------
  db.transaction(tx => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS size (
      product_id INTEGER,
      XS INTEGER,
      S INTEGER,
      M INTEGER,
      L INTEGER,
      XL INTEGER,
      FOREIGN KEY (product_id) REFERENCES products (product_id)
    );`,
    [],
    () => {
      console.log('Table size created successfully.');
    },
    (_, error) => {
      console.log('Error creating table size:', error);
    }
  );

  tx.executeSql(
    `INSERT INTO size (product_id, XS, S, M, L, XL)
    VALUES (?, ?, ?, ?, ?, ?),
           (?, ?, ?, ?, ?, ?),
           (?, ?, ?, ?, ?, ?),
           (?, ?, ?, ?, ?, ?),
           (?, ?, ?, ?, ?, ?),
           (?, ?, ?, ?, ?, ?);`,
    [
      1, 5, 5, 5, 5, 5,
      2, 3, 3, 3, 3, 3,
      3, 2, 2, 2, 2, 2,
      4, 0, 0, 0, 0, 0,
      5, 5, 5, 5, 5, 5,
      6, 4, 4, 4, 4, 4
    ],
    () => {
      console.log('Dummy data inserted into the size table successfully.');
    },
    (_, error) => {
      console.log('Error inserting dummy data into the size table:', error);
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
};

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
            cartItems.push({ productId: product_id, size, quantity });
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
