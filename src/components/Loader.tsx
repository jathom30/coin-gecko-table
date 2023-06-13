import { IconLoader } from "@tabler/icons-react"
import './Loader.scss'

export const Loader = () => {
  return (
    <div className="Loader">
      <div className="Loader__spin">
        <IconLoader />
      </div>
    </div>
  )
}