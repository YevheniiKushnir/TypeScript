import express, { Request, Response, NextFunction } from "express";

const globalError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
};

export default globalError;
