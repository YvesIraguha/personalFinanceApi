const errorHandler = async (data, callback) => {
  try {
    await callback(data);
  } catch (error) {
    return error;
  }
};

export default errorHandler;
