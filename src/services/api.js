const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2dHUyNTI2N0B2ZWx0ZWNoLmVkdS5pbiIsImV4cCI6MTc4MTY4Mjc0MCwiaWF0IjoxNzgxNjgxODQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzM3MWViODctZmNiNC00MWEyLWFmMjktNDFhMTI2MjBhNjQ4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoieSBtb2hpdGhhIiwic3ViIjoiNjE0YzExZDgtMTkzMi00NDRmLTk3MGUtOTBmNzBkYjZkNTRkIn0sImVtYWlsIjoidnR1MjUyNjdAdmVsdGVjaC5lZHUuaW4iLCJuYW1lIjoieSBtb2hpdGhhIiwicm9sbE5vIjoidnR1MjUyNjciLCJhY2Nlc3NDb2RlIjoianVGcGh2IiwiY2xpZW50SUQiOiI2MTRjMTFkOC0xOTMyLTQ0NGYtOTcwZS05MGY3MGRiNmQ1NGQiLCJjbGllbnRTZWNyZXQiOiJxYkFqVlZOUXhWdUd5Uk1LIn0.z_utzdJxSjnQsAjm62RUvkINX1_GHVXqkuHNbcjXhOI";
export async function getNotifications() {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("API Response:", data);

    return data.notifications || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}