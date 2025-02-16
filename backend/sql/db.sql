CREATE TYPE invoice_status AS ENUM ('pending', 'approved');
CREATE TABLE IF NOT EXISTS invoices(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    invoice_number INTEGER NOT NULL,
    total DECIMAL NOT NULL,
    currency text NOT NULL,
    invoice_date date NOT NULL,
    due_date date,
    vendor_name text,
    remittance_address text,
    status invoice_status
);