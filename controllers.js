import { documents } from './data.js';

export const getAllDocuments = (req, res) => {
  res.json({
    message: 'Success',
    data: documents,
  });
};
