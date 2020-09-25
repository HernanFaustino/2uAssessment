import Invoice from '../models/Invoice';

const INVOICE_STATES = {
    PENDING: 'pending',
    APPROVED: 'approved',
}

export async function createInvoice(req, res) {
    const {
        invoice_number,
        total,
        currency,
        invoice_date,
        due_date,
        vendor_name,
        remittance_address
    } = req.body;

    try {
        let newInvoice = await Invoice.create({
            invoiceNumber: invoice_number,
            total,
            currency,
            invoiceDate: invoice_date,
            dueDate: due_date,
            vendorName: vendor_name,
            remittanceAddress: remittance_address,
            status: INVOICE_STATES.PENDING,
        }, {
            fields: [
                'invoiceNumber',
                'total',
                'currency',
                'invoiceDate',
                'dueDate',
                'vendorName',
                'remittanceAddress',
                'status',
            ]
        });
        if (newInvoice) {
             return res.json({
                message: 'invoice submitted successfully',
                data: newInvoice,
            });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {}
        });
    }
}

export async function getInvoices(req, res) {
    try {
        const invoices = await Invoice.findAll();

        return res.json({
            data: invoices
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Something went wrong',
            data: [],
        });
    }
}

export async function getPendingInvoices(req, res) {
    try {
        const invoices = await Invoice.findAll({
            where: {
                status: INVOICE_STATES.PENDING
            }
        });

        return res.json({
            data: invoices
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Something went wrong',
            data: [],
        });
    }
}

export async function getInvoice(req, res) {
    const { id } = req.params;

    try {
        const invoice = await Invoice.findOne({
            where: {
                id
            }
        });
        return res.json(invoice);
    } catch (e) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
        });
        console.error(e);
    }
}

export async function deleteInvoice(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Invoice.destroy({
            where: {
                id
            }
        });
        return res.json({
            message: 'Invoice deleted successfully',
            count: deleteRowCount,
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Something went wrong',
            count: 0,
        });
    }
}

export async function approveInvoice(req, res) {
    const { id } = req.params;
    try {
        const invoice = await Invoice.findOne({
            attributes: [
                'id',
                'invoiceNumber',
                'total',
                'currency',
                'invoiceDate',
                'dueDate',
                'vendorName',
                'remittanceAddress',
                'status',
            ],
            where: {
                id
            }
        });
        await invoice.update({
            status: INVOICE_STATES.APPROVED
        });

         return res.json({
            message: 'Invoice updated successfully',
            data: invoice
         });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Something went wrong',
            count: {},
        });
    }
}

