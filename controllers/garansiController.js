import GaransiModel from "../model/garansiModel.js";

export const listGaransi = async (req, res) => {
    try {
        const data = await GaransiModel.find({});
        
        res.status(200).json({
            message: "List Garansi",
            data: data,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const createNewGaransi = async (req, res) => {
    try {
        const request = req.body;
        console.log(request);

        const response = await GaransiModel.create({
            productName: request.productName,
            purchaseDate: request.purchaseDate,
            expiryDate: request.expiryDate,
        });

        res.status(201).json({
            message: "Garansi berhasil ditambahkan",
            data: response,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const updateGaransi = async (req, res) => {
    try {
        const id = req.params.id;
        const request = req.body;

    if (!id) {
        return res.status(400).json({
            message: "ID wajib diisi",
            data: null,
        });
    }

    const response = await GaransiModel.findByIdAndUpdate(id, {
        productName: request.productName,
        purchaseDate: request.purchaseDate,
        expiryDate: request.expiryDate,
    });

    if (!response) {
        return res.status(404).json({
            message: "Data garansi tidak ditemukan",
            data: null,
        });
    }

    res.status(200).json({
        message: "Data garansi berhasil diupdate",
        data: response,
    });

    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const deleteGaransi = async (req, res) => {
    try {
        const id = req.params.id;

    if (!id) {
        return res.status(400).json({
            message: "ID wajib diisi",
            data: null,
        });
    }

    const response = await GaransiModel.findByIdAndDelete(id);

    if (response) {
        return res.status(200).json({
            message: "Data garansi berhasil dihapus",
            data: response,
        });
    }

    res.status(404).json({
        message: "Data garansi tidak ditemukan",
        data: null,
    });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};