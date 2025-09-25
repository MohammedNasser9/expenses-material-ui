import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5000',
    headers: {
    "Content-Type": "application/json",
  },
})

export const getTrans = async () => {
        const res = await api.get('/myData')
        return res.data
}

export const postTran = (newTran) => api.post('/myData',newTran)

export const deleteTran = (tran) => api.delete(`/myData/${tran.id}`)