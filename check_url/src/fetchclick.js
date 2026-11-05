
export const FetchJson = async (url) => {
  const response = await fetch(url);
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
  return response.json();
};