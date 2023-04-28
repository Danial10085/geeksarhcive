document.addEventListener('DOMContentLoaded', () => {
    const airtableApiKey = 'keyI8Sg86PWf1ocNE';
    const airtableBaseId = 'appXGjV0zt5ytIrEe';
    const tableName = 'Freelancers';
  
    const fetchData = async () => {
      const url = `https://api.airtable.com/v0/${airtableBaseId}/${tableName}`;
      const config = {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
        },
      };
  
      try {
        const response = await axios.get(url, config);
        const data = response.data.records[0].fields;
        const User = data.User;
        const Bio = data.Bio;
  
        document.querySelector('h3').textContent = User;
        document.querySelector('.carditems').innerHTML = Bio;
      } catch (error) {
        console.error('Error fetching data from Airtable:', error);
      }
    };
  
    fetchData();
  });
  