import apiClient from "../api/apiClient";

const save = (payload)=>{
    try {
        apiClient.post("/add",payload);
    } catch (error) {
        
    }
}

const getAllInvoices = ()=>{
    try {
        return apiClient.get("/")
    } catch (error) {
        return error;
    }
}

const deleteInvoice = (id)=>{
    try {
        apiClient.delete(`/${id}`)
        
    } catch (error) {
        throw new Error(error);
    }
}
export default save;

export {getAllInvoices,deleteInvoice}