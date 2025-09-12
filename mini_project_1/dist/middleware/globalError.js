const globalError = (err, req, res, next) => {
    console.error("Error:", err);
    res
        .status(500)
        .json({ message: "Internal Server Error", error: err.message });
};
export default globalError;
//# sourceMappingURL=globalError.js.map