INSERT INTO USER
    (name, password)
VALUES
    ('ZodX', 'king'),
    ('Bombifighter', 'insanepw'),
    ('benedekszabo', 'bolt');

INSERT INTO PRODUCT
(name, quantity, price, description)
VALUES
('análrózsa', 4, 300, 'Explore the exstasy...');

INSERT INTO CART
(product_id, user_id)
VALUES
(1, 1),
(1, 2);