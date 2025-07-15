exports.up = (pgm) => {
  // Create a custom type for user roles
  pgm.createType('user_role', ['artist', 'admin']);

  // Create the main users table
  pgm.createTable('users', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    email: { type: 'varchar(255)', notNull: true, unique: true },
    password_hash: { type: 'varchar(255)', notNull: true },
    full_name: { type: 'varchar(255)' },
    avatar_url: { type: 'text' },
    role: { type: 'user_role', default: 'artist' },
    is_member: { type: 'boolean', default: false },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  // Create the art_forms table
  pgm.createTable('art_forms', {
    id: 'id', // This is a shortcut for a serial primary key
    name: { type: 'varchar(100)', notNull: true, unique:true },
    description: { type: 'text' },
    image_url: { type: 'text' },
  });

  // Create portfolio_items table with a foreign key to users
  pgm.createTable('portfolio_items', {
    id: 'id',
    user_id: { type: 'uuid', notNull: true, references: 'users(id)', onDelete: 'CASCADE' },
    title: { type: 'varchar(255)', notNull: true },
    description: { type: 'text' },
    item_type: { type: 'varchar(50)' },
    media_url: { type: 'text', notNull: true },
    thumbnail_url: { type: 'text' },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  // Create blog_posts table with a foreign key to users
  pgm.createTable('blog_posts', {
    id: 'id',
    author_id: { type: 'uuid', references: 'users(id)', onDelete: 'SET NULL' },
    title: { type: 'varchar(255)', notNull: true },
    excerpt: { type: 'text' },
    content: { type: 'text' },
    image_url: { type: 'text' },
    read_time_minutes: { type: 'integer' },
    created_at: { type: 'timestamptz', notNull: true, default: pgm.func('now()') },
  });

  // Create events table with a foreign key to art_forms
  pgm.createTable('events', {
    id: 'id',
    title: { type: 'varchar(255)', notNull: true },
    art_form_id: { type: 'integer', references: 'art_forms(id)' },
    description: { type: 'text' },
    location: { type: 'varchar(255)' },
    event_date: { type: 'timestamptz', notNull: true },
  });

  // Insert the initial art form data
  pgm.sql(`
    INSERT INTO art_forms (name, description, image_url) VALUES
    ('Stand-up Comedy', 'Master the art of timing, wit, and public speaking.', '/images/stand-up-comedy.jpeg'),
    ('Poetry', 'Weave words into powerful verses that evoke emotion.', '/images/poetry.jpeg'),
    ('Storytelling', 'Captivate listeners with compelling narratives.', '/images/storytelling.jpeg'),
    ('Singing', 'Train your voice to hit every note with passion.', '/images/singing.jpeg'),
    ('Dancing', 'Express yourself through movement, rhythm, and grace.', '/images/dancing.jpeg'),
    ('Rap', 'Master flow, rhyme, and lyricism to become a powerful MC.', '/images/rap.jpeg');
  `);
};

exports.down = (pgm) => {
  // To reverse the migration, we drop tables in the reverse order of creation
  // to avoid foreign key constraint errors.
  pgm.dropTable('events');
  pgm.dropTable('blog_posts');
  pgm.dropTable('portfolio_items');
  pgm.dropTable('art_forms');
  pgm.dropTable('users');
  pgm.dropType('user_role');
};