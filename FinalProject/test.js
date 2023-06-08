 // IMAGES TABLE---------------------------------------------------------------------------------------------
 /*
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
        1, 'assets/p1.PNG',
        2, 'assets/p2.PNG',
        3, 'assets/p3.PNG',
        4, 'assets/p4.PNG',
        5, 'assets/p5.PNG',
        6, 'assets/p6.PNG'
      ],
      () => {
        console.log('Dummy data inserted into the Images table successfully.');
      },
      (_, error) => {
        console.log('Error inserting dummy data into the Images table:', error);
      }
    );
  });
};

db.transaction(tx => {
  tx.executeSql(
    `SELECT * FROM images;`,
    [],
    (_, result) => {
      console.log('images:');
      const rows = result.rows;
      for (let i = 0; i < rows.length; i++) {
        const image = rows.item(i);
        console.log('Product ID:', image.product_id);
        console.log('path:', image.image_path);
        console.log('------------------------------');
      }
    },
    (_, error) => {
      console.log('Error fetching products:', error);
    }
  );
});
db.transaction(tx => {
  tx.executeSql(
    `SELECT * FROM size;`,
    [],
    (_, result) => {
      console.log('size:');
      const rows = result.rows;
      for (let i = 0; i < rows.length; i++) {
        const size = rows.item(i);
        console.log('Product ID:', size.product_id);
        console.log('extra small:', size.XS);
        console.log('small:', size.S);
        console.log('Medium:', size.M);
        console.log('Large:', size.L);
        console.log('extra Large:', size.XL);
        console.log('------------------------------');
      }
    },
    (_, error) => {
      console.log('Error fetching sizes:', error);
    }
  );
});



const deleteTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'DROP TABLE IF EXISTS users;',
      [],
      () => {
        console.log('Users table deleted successfully.');
      },
      (_, error) => {
        console.log('Error deleting Users table:', error);
      }
    );
    tx.executeSql(
      'DROP TABLE IF EXISTS products;',
      [],
      () => {
        console.log('Products table deleted successfully.');
      },
      (_, error) => {
        console.log('Error deleting Products table:', error);
      }
    );
    tx.executeSql(
      'DROP TABLE IF EXISTS images;',
      [],
      () => {
        console.log('Images table deleted successfully.');
      },
      (_, error) => {
        console.log('Error deleting Images table:', error);
      }
    );
    tx.executeSql(
      'DROP TABLE IF EXISTS size;', // Delete size table
      [],
      () => {
        console.log('Size table deleted successfully.');
      },
      (_, error) => {
        console.log('Error deleting Size table:', error);
      }
    );
    tx.executeSql(
      'DROP TABLE IF EXISTS favorites;', // Delete favorites table
      [],
      () => {
        console.log('Favorites table deleted successfully.');
      },
      (_, error) => {
        console.log('Error deleting Favorites table:', error);
      }
    );
    tx.executeSql(
      'DROP TABLE IF EXISTS cart;', // Delete cart table
      [],
      () => {
        console.log('Cart table deleted successfully.');
      },
      (_, error) => {
        console.log('Error deleting Cart table:', error);
      }
    );
  });
};

deleteTables();
*/