import { useParams } from 'react-router-dom'
import { useGetDataByIdQuery } from '../../redux/services/watchesApi'

const Details = () => {
  const {id}=useParams()
  const {data,isError,isLoading}=useGetDataByIdQuery(id)
  return (
    <div>Details</div>
  )
}

export default Details