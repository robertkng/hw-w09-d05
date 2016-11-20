BEGIN;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title TEXT,
  poster TEXT
);



COMMIT;

