CREATE DATABASE pernmusic;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_first_name VARCHAR(255),
  user_last_name VARCHAR(255),
  mobile_number VARCHAR(50),
  email_address VARCHAR(255)
);

CREATE TABLE User_likes(
  user_id int,
  fan_of_music_group VARCHAR(255),
  primary key (user_id, fan_of_music_group)
);

INSERT INTO users
VALUES
  (DEFAULT, 'Elvis', 'Wei', '636-591-8285', 'ewei068@berkeley.edu'),
  (DEFAULT, 'Joe', 'Mama', '123-456-7890', 'joemama@gmail.com');

INSERT INTO User_likes
VALUES
  (1, 'Porter Robinson'),
  (1, 'Kanye West'),
  (1, 'Alan Walker'),
  (1, 'Drake'),
  (1, 'Kid Cudi'),
  (1, 'DJ Okawari'),
  (1, 'Beach House'),
  (2, 'Mario Judah'),
  (2, 'Crazy Frog'),
  (2, 'Playboi Carti'),
  (2, 'Drake'),
  (2, 'Rick Astley');
