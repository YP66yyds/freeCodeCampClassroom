const redirectUser = destination => {
  return {
    redirect: {
      destination: destination,
      permanent: false
    }
  };
};

export default redirectUser;
