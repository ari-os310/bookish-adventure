const pgp = require('pg-promise')();

/**
 * An object that has methods matching useful database queries.
 * Use `this.db` to access a connected pg-promise connection.
 * Make sure to return the promise!
 *
 * For examples of other queries, see
 * [pghttps://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
 */
class BooktonicaDatabase {
  /**
   * @param {String} name - name of database to connect to
   */
  constructor(name) {
    const connectionString = `postgres://localhost:5432/${name}`;
    console.log('Postgres DB => ', connectionString);
    this.db = pgp(connectionString);
  }
  
  sanityCheck() {
    console.log('\tTesting database connection...');
    return this.getBooksCount().then(count =>
      console.log(`\t✔️ Found ${count} books.`)
    );
  }

  getBooksCount() {
    return this.db.one('SELECT count(*) FROM books').then(r => r.count);
  }

  getAllBooks() {
    return this.db.any(
      `SELECT 
        b.id,
        b.title,
        b.subtitle,
        b.summary,
        b.cover_image_url,
        to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
        a.name AS author_name FROM books b 
        INNER JOIN authors a on a.id = b.author_id
        ORDER BY b.publication_date DESC`
    );
  }

  getAllGenres() {
    return this.db.any(
      `SELECT
        DISTINCT b.genre
        FROM books b 
        WHERE b.genre IS NOT NULL
        ORDER BY b.genre `
    );
  }

  getBooksByGenre(genre) {
    return this.db.any(
      `SELECT
        b.id,
        b.title,
        b.subtitle,
        b.summary,
        b.cover_image_url,
        to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
        a.name AS author_name FROM books b 
        INNER JOIN authors a on a.id = b.author_id
        WHERE genre = $1`,
      genre
    );
  }

  // created this and then realized getAllBooks already sort by newest pub_date
  sortNewFirst() {
    return this.db.any(
      `SELECT
        b.id,
        b.title,
        b.subtitle,
        b.summary,
        b.cover_image_url,
        to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
        a.name AS author_name FROM books b 
        INNER JOIN authors a on a.id = b.author_id
        ORDER BY b.publication_date DESC`
    );
  }

  sortOldFirst() {
    return this.db.any(
      `SELECT
        b.id,
        b.title,
        b.subtitle,
        b.summary,
        b.cover_image_url,
        to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
        a.name AS author_name FROM books b 
        INNER JOIN authors a on a.id = b.author_id
        ORDER BY b.publication_date 
      `
    );
  }

  sortByABC() {
    return this.db.any(
      `SELECT
        b.id,
        b.title,
        b.subtitle,
        b.summary,
        b.cover_image_url,
        to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
        a.name AS author_name FROM books b 
        INNER JOIN authors a on a.id = b.author_id
        ORDER BY b.title 
      `
    );
  }

  // is there a way to shorten this query and do the same thing ?
  searchByBook(book) {
    return this.db.any(
      `SELECT
          b.id,
          b.title,
          b.subtitle,
          b.summary,
          b.cover_image_url,
          to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
          a.name AS author_name 
          FROM books b 
          INNER JOIN authors a 
          ON a.id = b.author_id
          WHERE lower(b.title)
          LIKE '%$1#%' 
          
        UNION
      
      SELECT
          b.id,
          b.title,
          b.subtitle,
          b.summary,
          b.cover_image_url,
          to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
          a.name AS author_name 
          FROM books b 
          INNER JOIN authors a 
          ON a.id = b.author_id
          WHERE lower(a.name)
          LIKE '%$1#%'
          ORDER BY author_name `,
      book
    );
  }
  
  getAllComments() {
    return this.db.any(`SELECT * FROM user_comments`);
  }

  postComment(comment) {
    return this.db.one(
      `INSERT INTO user_comments 
      (comment, user_id, book_id) 
      VALUES ($1, $2, $3)
      RETURNING * `,
      [comment.comment, 1, comment.book_id]
    );
  }
  
}
module.exports = BooktonicaDatabase;
