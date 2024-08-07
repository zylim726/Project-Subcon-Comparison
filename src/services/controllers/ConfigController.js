import { axios, Error, config } from "@/services";
import ConfigModels from "@/models/ConfigModels.js";
import { handleApiError } from "@/services/axios/handleApiError.js"; 

const AccessUserController = {
  async accessUser() {
    try {
      const apiHost = config.getHost();
      const headers = config.getHeadersWithToken(); 

      const response = await axios.get(`${apiHost}/systemuser`, {
        headers,
      });

      const processedData = ConfigModels.processResponseData(response.data);
  
      return processedData;

    } catch (error) {
      const errorMessage = handleApiError(error);
      throw { errorMessage };
    }
  },
  async updateUserLoginAllowed(user) {
    try {
      
      const apiHost = config.getHost();
      const headers = config.getHeadersWithToken();

      const response = await axios.put(
        `${apiHost}/systemuser/edit/${user.id}`,
        {
          subcon_login_access: user.loginAllowed,
        },
        { headers }
      );

      return response.data.message;
    } catch (error) {
      const errorMessage = handleApiError(error);
      throw { errorMessage };
    }
  },
};

export default AccessUserController;

