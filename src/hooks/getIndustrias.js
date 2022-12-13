
const API = "https://customer-scoops-restapi-production.up.railway.app/api/industrias"

export async function getIndustrias(){
    const response = await fetch(API);
    const data = await response.json();
    return data
}