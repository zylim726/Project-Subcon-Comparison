const SubconModels = {
  processResponseData(response) {
    const dataArray = response.data;

    // Filter out entries with id === 1
    const filteredData = dataArray.filter(config => config.id !== 1);

    // Process the filtered data
    const processedData = filteredData.map(config => ({
      id: config.id,
      name: config.name, 
      updatedAt: config.updatedAt,
      reg_no: config.reg_no,
      gst_id: config.gst_id,
      address: config.address,
      phone_fex: config.phone_fex,
      phone: config.phone,
      contact_person: config.contact_person,
      email_1: config.email_1,
      email_2: config.email_2,
      email_3: config.email_3,
      short_code: config.short_code
    }));

    return processedData;
  },
};

export default SubconModels;
