import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { countryEndpoints } from '../apis';

const { COUNTRY_DETAILS_API } = countryEndpoints;

export const fetchCountryDetails = async countryname => {
  //const toastId = toast.loading("Loading...")
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      COUNTRY_DETAILS_API,
      undefined,
      undefined,
      {
        countryname,
      }
    );
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    console.log('COURSE_DETAILS_API API ERROR............', error);
    result = error.response.data;
    // toast.error(error.response.data.message);
  }
  // toast.dismiss(toastId)
  return result;
};
