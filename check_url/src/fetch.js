import { ref, watchEffect, toValue} from "vue";

export const useFetch =  (url) => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchData = async () => {
    const urlValue = toValue(url);
    if (!urlValue) return;

    data.value = null;
    error.value = null;
    isLoading.value = true;

    // fetch(toValue(url))
    //     .then((response) => {
    //         if (!response.ok) {
    //             console.log("response not ok")
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         // console.log(response)
    //         return response.json();
    //     })
    //     .then((jsonData) => {
    //         data.value = jsonData;
    //     })
    //     .catch((err) => {
    //         // console.log(err.message)
    //         error.value = err.message;
    //         // console.log(error)
    //     });

    try {
        const response = await fetch(urlValue);

        if (!response.ok) {
            let body = null;
            try {
                body = await response.json();
            }
            catch {

            }
            const err = new Error(body?.message.contenu);
     
            throw err;
        }
        data.value =  await response.json();

    } catch (err) {
        error.value = err.message;
    }finally {
        isLoading.value = false;   
    }

    }

    watchEffect(() => {
        fetchData();
    });
    // console.log(error)
    return { data, error, isLoading };
}
