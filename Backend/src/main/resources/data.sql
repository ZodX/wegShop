INSERT INTO USER
    (name, password)
VALUES
    ('ZodX', 'king'),
    ('Bombifighter', 'insanepw'),
    ('benedekszabo', 'bolt');

INSERT INTO PRODUCT
(name, quantity, price, description)
VALUES
('analrozsa', 4, 300, 'Explore the exstasy...'),
('Kefe', 12, 200, 'Kefélj'),
('Szek', 5, 2000, 'Explore the chair'),
('Gep', 2, 20000, 'GAMING'),
('Kuka', 10, 100, 'Trash 4 lif');

INSERT INTO CART
(product_id, user_id)
VALUES
(1, 1),
(1, 2);
