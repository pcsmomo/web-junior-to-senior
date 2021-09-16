BEGIN TRANSACTION;

-- quote must be single quote
INSERT INTO users (name, email, entries, joined)
VALUES ('Noah', 'noah@gmail.com', 5, '2021-09-14 21:26:54');

-- pw : 1234
INSERT INTO login (hash, email)
VALUES ('$2a$10$CYVvPD4PP5Kp47ld3b.pDuBDUeF.gC5XgtsR0Dry5JqnHxr3X/Zj.', 'noah@gmail.com');

COMMIT;