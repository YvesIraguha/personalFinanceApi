const errorHandler = async (callback, ...data) => {
  try {
    await callback(...data);
  } catch (error) {
    throw new Error("Ooops something is not working properly over here");
  }
};

export default errorHandler;
